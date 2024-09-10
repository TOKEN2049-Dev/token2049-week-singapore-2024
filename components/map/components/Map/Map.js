import React, { useEffect, useRef } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import "./MapComponent.css";
import { DEFAULT_COORDINATES } from "../../const/coordinates";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

const Map = ({ events, onZoomChange, onMarkerClick, onClusterClick, selectedEvent, isMobile }) => {
	const mapContainerRef = useRef(null);
	const mapRef = useRef(null);
	const activeClusterId = useRef(null);
	const selectedEventId = useRef(null);
	const popupRef = useRef(null);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: "mapbox://styles/mapbox/streets-v12",
			center: [DEFAULT_COORDINATES.longitude, DEFAULT_COORDINATES.latitude],
			zoom: 11,
		});

		mapRef.current = map;

		const resetColors = () => {
			// Reset clusters to original color
			map.setPaintProperty("clusters", "circle-color", "#8247FF");

			// Reset cluster count text color
			map.setPaintProperty("cluster-count", "text-color", "#ffffff");

			// Reset unclustered points to original color
			map.setPaintProperty("unclustered-point", "circle-color", "#8247FF");

			// Reset unclustered point label text color
			map.setPaintProperty("unclustered-point-label", "text-color", "#ffffff");
		};

		map.on("load", () => {
			map.addSource("events", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: events.map((event) => ({
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: event.latlong,
						},
						properties: {
							id: event.event_id,
							title: event.event_name,
							description: event.description,
							category: event.event_category,
						},
					})),
				},
				cluster: true,
				clusterMaxZoom: 17,
				clusterRadius: 50,
			});

			// Add cluster circles
			map.addLayer({
				id: "clusters",
				type: "circle",
				source: "events",
				filter: ["has", "point_count"],
				paint: {
					"circle-color": "#8247FF",
					"circle-radius": ["step", ["get", "point_count"], 15, 10, 25, 30, 40],
					"circle-stroke-width": 5,
					"circle-stroke-color": "#fff",
					"circle-stroke-opacity": 0.6,
				},
			});

			// Add cluster count labels
			map.addLayer({
				id: "cluster-count",
				type: "symbol",
				source: "events",
				filter: ["has", "point_count"],
				layout: {
					"text-field": "{point_count_abbreviated}",
					"text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
					"text-size": 22,
				},
				paint: {
					"text-color": "#ffffff",
				},
			});

			// Add single event points with different colors based on category
			map.addLayer({
				id: "unclustered-point",
				type: "circle",
				source: "events",
				filter: ["!", ["has", "point_count"]],
				paint: {
					"circle-color": "#8247FF",
					"circle-radius": 16,
					"circle-stroke-width": 1,
					"circle-stroke-color": "#fff",
					"circle-stroke-opacity": 0.5,
				},
			});

			// Add "1" label to single event points
			map.addLayer({
				id: "unclustered-point-label",
				type: "symbol",
				source: "events",
				filter: ["!", ["has", "point_count"]],
				layout: {
					"text-field": "1",
					"text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
					"text-size": 18,
				},
				paint: {
					"text-color": "#ffffff",
				},
			});

			// Handle cluster click
			map.on("click", "clusters", (e) => {
				const features = map.queryRenderedFeatures(e.point, {
					layers: ["clusters"],
				});
				const clusterId = features[0].properties.cluster_id;

				// Reset colors before highlighting the new cluster
				resetColors();

				activeClusterId.current = clusterId;
				map.setPaintProperty("clusters", "circle-color", [
					"case",
					["==", ["get", "cluster_id"], clusterId],
					"#ffffff", // White color for the clicked cluster
					"#8247FF", // Default color for others
				]);

				map.setPaintProperty("cluster-count", "text-color", [
					"case",
					["==", ["get", "cluster_id"], clusterId],
					"#8247FF", // Purple color for the clicked cluster's text
					"#ffffff", // Default color for others
				]);

				// Fetch events within the cluster
				map.getSource("events").getClusterLeaves(clusterId, Infinity, 0, (err, clusterFeatures) => {
					if (err) return;
					const clusterEvents = clusterFeatures.map((f) => f.properties.id);
					onZoomChange(events.filter((event) => clusterEvents.includes(event.event_id)));

					// Call the cluster click handler to move the sidebar
					if (isMobile) {
						onClusterClick();
					}
				});
			});

			// Handle single event marker click
			map.on("click", "unclustered-point", (e) => {
				// Reset colors before highlighting the clicked point
				resetColors();

				const { id } = e.features[0].properties;

				// Change the clicked event's circle color to white
				map.setPaintProperty("unclustered-point", "circle-color", [
					"case",
					["==", ["get", "id"], id],
					"#ffffff", // White color for the clicked point
					"#8247FF", // Default color for others
				]);

				map.setPaintProperty("unclustered-point-label", "text-color", [
					"case",
					["==", ["get", "id"], id],
					"#8247FF", // Purple color for the clicked cluster's text
					"#ffffff", // Default color for others
				]);

				onMarkerClick(id);

				// Show the clicked event in the sidebar
				onZoomChange(events.filter((event) => event.event_id === id));
			});

			// Handle clicks outside any cluster or point
			map.on("click", (e) => {
				const features = map.queryRenderedFeatures(e.point, {
					layers: ["clusters", "unclustered-point"],
				});

				if (features.length === 0) {
					// Clicked on empty space, reset colors
					resetColors();
					onZoomChange(events); // Reset to show all events in the sidebar
				}
			});

			// map.on("render", () => {
			// 	// const bounds = map.LngLatBounds();
			// 	// console.log("bounds", map.LngLatBounds());
			// 	// console.log("events", events);
			// 	// const validEvents = events.filter((event) => {
			// 	// 	const [lng, lat] = event.latlong;
			// 	// 	return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
			// 	// });
			// 	// const visibleEvents = events.filter((event) => bounds.contains(event.latlong));
			// 	// onZoomChange(visibleEvents);
			// });

			map.on("mouseenter", "clusters", () => {
				map.getCanvas().style.cursor = "pointer";
			});

			map.on("mouseleave", "clusters", () => {
				map.getCanvas().style.cursor = "";
			});
		});

		return () => map.remove();
	}, [events, onZoomChange, onMarkerClick]);

	useEffect(() => {
		// Define the render handler outside to keep reference consistent
		const showPopupAfterMove = () => {
			updateSelectedEventState(mapRef.current, selectedEvent.event_id);
			updateSelectedEventColors(mapRef.current, selectedEvent.event_id);
			showPopup(mapRef.current, selectedEvent);

			// const bounds = mapRef.current.LngLatBounds();
			// console.log("bounds", mapRef.current.LngLatBounds());
			// console.log("events", events);
			// const validEvents = events.filter((event) => {
			// 	const [lng, lat] = event.latlong;
			// 	return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
			// });
			// const visibleEvents = events.filter((event) => bounds.contains(event.latlong));
			// onZoomChange(visibleEvents);

			// Detach listener after it's done
			mapRef.current.off("render", showPopupAfterMove);
		};

		// Check if selectedEvent exists and map is initialized
		if (selectedEvent && mapRef.current) {
			const map = mapRef.current;

			// Add the new render listener
			map.on("render", showPopupAfterMove);

			// Trigger map flyTo
			map.flyTo({
				center: isMobile ? [selectedEvent.latlong[0], selectedEvent.latlong[1] - 0.004] : selectedEvent.latlong,
				zoom: isMobile ? 14 : 17,
				essential: true,
			});
		}

		// Optional clean-up to remove listener on component unmount or dependency change
		return () => {
			if (mapRef.current) {
				mapRef.current.off("render", showPopupAfterMove);
			}
		};
	}, [selectedEvent]); // Trigger only when selectedEvent changes

	const updateSelectedEventState = (map, eventId) => {
		if (selectedEventId.current) {
			map.setFeatureState({ source: "events", id: selectedEventId.current }, { selected: false });
		}
		map.setFeatureState({ source: "events", id: eventId }, { selected: true });
		selectedEventId.current = eventId;
	};

	const updateSelectedEventColors = (map, eventId) => {
		map.setPaintProperty("unclustered-point", "circle-color", ["case", ["==", ["get", "id"], eventId], "#ffffff", "#8247FF"]);

		map.setPaintProperty("unclustered-point-label", "text-color", ["case", ["==", ["get", "id"], eventId], "#8247FF", "#ffffff"]);
	};

	const showPopup = (map, event) => {
		if (popupRef.current) {
			popupRef.current.remove();
		}

		// PopupCard
		const popupHTML = `
      <div class="popup-container">
        <div class="popup-header">
          <img src="${event.thumbnail}" alt="${event.event_name}" class="popup-thumbnail" />
          <div class="popup-title">
            <h3>${event.event_name}</h3>
          </div>
        </div>
        <div class="popup-footer">
          <a href="${selectedEvent.registration_link}" target="_blank" rel="noopener noreferrer" class="popup-button">REGISTER</a>
        </div>
      </div>
    `;

		const popup = new mapboxgl.Popup({
			closeOnClick: true,
			className: "custom-popup",
		})
			.setLngLat([event.latlong[0], event.latlong[1] + 0.0001])
			.setHTML(popupHTML)
			.addTo(map);

		popupRef.current = popup;
	};

	return <div ref={mapContainerRef} className="map" />;
};

export default Map;
