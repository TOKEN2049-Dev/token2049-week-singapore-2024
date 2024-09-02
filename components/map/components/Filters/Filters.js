import React, { useState, useEffect } from "react";
import { Box, IconButton, InputBase } from "@mui/material";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FilterBox, FilterBoxMobile, SearchWrapper, SearchWrapperMobile } from "./FilterComponents";
import ResetButton from "./ResetButton";
import { FilterSelect, FilterSelectMobile } from "./FilterSelect";
import { dateOptions, priceOptions, tagOptions } from "../../const/filters";
import { format, isWithinInterval, parseISO, startOfDay } from "date-fns";

const FilterBar = ({ onFilterChange, onSearch, ismobile }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedDate, setSelectedDate] = useState("all");
	const [selectedTag, setSelectedTag] = useState("all");
	const [selectedPrice, setSelectedPrice] = useState("all");
	const [hasSearched, setHasSearched] = useState(false);

	// Set Date Filter to be Today (In case of today is within the Token Week)
	useEffect(() => {
		const today = startOfDay(new Date());
		const startDate = parseISO("2024-09-16T00:00:00.000Z");
		const endDate = parseISO("2024-09-22T00:00:00.000Z");

		if (isWithinInterval(today, { start: startDate, end: endDate })) {
			const formattedToday = format(today, "yyyy-MM-dd'T'00:00:00.000'Z'");
			console.log("formattedToday", formattedToday);
			const matchingDate = dateOptions.find((option) => option.value === formattedToday);
			if (matchingDate) {
				setSelectedDate(matchingDate.value);
				onFilterChange("date", matchingDate.value);
			} else {
				setSelectedDate("All");
				onFilterChange("date", "All");
			}
		} else {
			setSelectedDate("All");
			onFilterChange("date", "All");
		}
	}, []);

	const isAnyFilterActive = () => {
		return (
			selectedDate.toLocaleLowerCase() !== "all" ||
			selectedTag.toLocaleLowerCase() !== "all" ||
			selectedPrice.toLocaleLowerCase() !== "all" ||
			searchQuery.toLocaleLowerCase() !== ""
		);
	};

	const handleDateChange = (event) => {
		const date = event.target.value;
		setSelectedDate(date);
		onFilterChange("date", date);
	};

	const handleTagChange = (event) => {
		const tag = event.target.value;
		setSelectedTag(tag);
		onFilterChange("tag", tag);
	};

	const handlePriceChange = (event) => {
		const price = event.target.value;
		setSelectedPrice(price);
		onFilterChange("price", price);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSearch = () => {
		onSearch(searchQuery);
		setHasSearched(true);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	const handleClearSearch = () => {
		setSearchQuery("");
		setHasSearched(false);
		onSearch("");
	};

	const handleReset = () => {
		setSelectedDate("all");
		setSearchQuery("");
		setSelectedTag("all");
		setSelectedPrice("all");
		setHasSearched(false);
		onFilterChange("tag", "all");
		onFilterChange("price", "all");
		onFilterChange("date", "all");
		onSearch("");
	};

	return !ismobile ? (
		<FilterBox>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "2px",
					flexWrap: "wrap",
					width: "100%",
					margin: "0 auto",
				}}
			>
				{/* Select Filters Row */}
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						width: "100%",
					}}
				>
					<FilterSelect value={selectedDate} onChange={handleDateChange} options={dateOptions} ismobile={false} type="date" />
					<FilterSelect value={selectedTag} onChange={handleTagChange} options={tagOptions} ismobile={false} type="tag" />
					<FilterSelect value={selectedPrice} onChange={handlePriceChange} options={priceOptions} ismobile={false} type="price" />
				</Box>

				{/* Search and Reset Row */}
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						width: "100%",
						mt: "10px",
					}}
				>
					<SearchWrapper>
						<InputBase
							placeholder="Search..."
							inputProps={{ "aria-label": "search" }}
							value={searchQuery}
							onChange={handleSearchChange}
							onKeyDown={handleKeyDown}
							sx={{
								fontSize: "14px",
								padding: "4px",
								flexGrow: 1,
							}}
						/>
						<IconButton onClick={hasSearched ? handleClearSearch : handleSearch} sx={{ fontSize: "12px" }}>
							{hasSearched ? <FaTimes /> : <FaSearch />}
						</IconButton>
					</SearchWrapper>
					{isAnyFilterActive() && <ResetButton handleReset={handleReset} />}
				</Box>
			</Box>
		</FilterBox>
	) : (
		<FilterBoxMobile>
			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1, mt: 1 }}>
				<FilterSelectMobile value={selectedDate} onChange={handleDateChange} options={dateOptions} ismobile={false} type="date" />
				<FilterSelectMobile value={selectedTag} onChange={handleTagChange} options={tagOptions} ismobile={true} type="tag" />
				<FilterSelectMobile value={selectedPrice} onChange={handlePriceChange} options={priceOptions} ismobile={true} type="price" />
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between", // Space between elements
					alignItems: "center", // Center align items vertically
					gap: "10px",
					width: "100%",
					mt: "10px",
				}}
			>
				<SearchWrapperMobile>
					<InputBase
						placeholder="Search..."
						inputProps={{ "aria-label": "search" }}
						value={searchQuery}
						onChange={handleSearchChange}
						onKeyDown={handleKeyDown}
						sx={{
							fontSize: "12px",
							padding: "4px",
							flexGrow: 1,
						}}
					/>
					<IconButton onClick={hasSearched ? handleClearSearch : handleSearch} sx={{ fontSize: "12px" }}>
						{hasSearched ? <FaTimes /> : <FaSearch />}
					</IconButton>
				</SearchWrapperMobile>

				{isAnyFilterActive() && <ResetButton handleReset={handleReset} />}
			</Box>
		</FilterBoxMobile>
	);
};

export default FilterBar;
