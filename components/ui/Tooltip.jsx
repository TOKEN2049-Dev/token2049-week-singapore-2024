export default function Tooltip({ labelText, message, tooltipLocation, theme }) {
	return (
		<button
			type="button"
			className={"tooltip-button font-primary"}
			data-tooltip={message}
			data-tooltip-location={tooltipLocation ? tooltipLocation : "left"}
			data-tooltip-theme={theme ? "glass" : ""}
		>
			{labelText}
		</button>
	);
}
