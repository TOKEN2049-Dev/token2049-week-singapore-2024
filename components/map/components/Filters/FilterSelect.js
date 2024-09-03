import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { FaChevronDown } from "react-icons/fa6";

const StyledSelect = styled(Select)({
	"& .MuiSelect-select": {
		padding: "10px 16px",
		borderRadius: "10px",
		display: "flex",
		width: "200px",
		alignItems: "center",
		backgroundColor: "#F5F7F9",
		color: "#1C1C1C",
		"&:focus": {
			backgroundColor: "#F5F7F9",
		},
	},
	"& .MuiOutlinedInput-notchedOutline": {
		borderColor: "#F5F7F9",
	},
	"&:hover .MuiOutlinedInput-notchedOutline": {
		borderColor: "#F5F7F9",
	},
	"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
		borderColor: "#F5F7F9",
	},
	"& .MuiSelect-select.Mui-disabled": {
		color: "#1C1C1C",
	},
	"& .MuiSelect-icon": {
		padding: "0 8px",
		color: "#1C1C1C", // Ensure the dropdown icon color matches
	},
});

const StyledMenuItem = styled(MenuItem)({
	fontSize: "12px",
	padding: "8px 12px",
	"&.Mui-selected": {
		backgroundColor: "#F5F7F9",
		color: "#1C1C1C",
		"&:hover": {
			backgroundColor: "#E8EAF0", // Slightly darker on hover
		},
	},
	"&:hover": {
		backgroundColor: "#E8EAF0",
	},
	"&.Mui-focusVisible": {
		backgroundColor: "#F5F7F9",
	},
});

const StyledSelectValue = styled("div")({
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
	maxWidth: "100%",
});

const MenuProps = {
	PaperProps: {
		style: {
			borderRadius: "20px",
			marginTop: "10px",
			boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
		},
	},
};

const FilterSelect = ({ value, onChange, options, type }) => (
	<FormControl>
		<StyledSelect
			value={value}
			onChange={onChange}
			sx={{
				width: type === "tag" ? "185px" : type === "date" ? "150px" : "100px",
				padding: "1px 8px",
				borderRadius: "100px",
				border: "1px solid #F5F7F9",
				color: "#1C1C1C",
				fontSize: "12px",
				backgroundColor: "#F5F7F9",
				fontWeight: 500,
				textTransform: "none",
			}}
			MenuProps={MenuProps}
			IconComponent={FaChevronDown}
			displayEmpty
		>
			{options.map((option, index) => (
				<StyledMenuItem key={index} value={option.value} disabled={option.disabled} sx={{ width: type === "tag" ? "180px" : "150px" }}>
					{option.label}
				</StyledMenuItem>
			))}
		</StyledSelect>
	</FormControl>
);

const FilterSelectMobile = ({ value, onChange, options, type }) => (
	<FormControl>
		<StyledSelect
			value={value}
			onChange={onChange}
			sx={{
				width: type === "tag" ? "35vw" : type === "date" ? "30vw" : "25vw",
				padding: "1px 5px",
				borderRadius: "100px",
				border: "1px solid #F5F7F9",
				fontSize: "10px",
				backgroundColor: "#F5F7F9",
				fontWeight: 500,
				textTransform: "none",
			}}
			MenuProps={MenuProps}
			IconComponent={FaChevronDown}
			displayEmpty
			renderValue={(selected) => <StyledSelectValue>{options.find((option) => option.value === selected)?.label || ""}</StyledSelectValue>}
		>
			{options.map((option, index) => (
				<StyledMenuItem key={index} value={option.value} disabled={option.disabled} sx={{ width: type === "tag" ? "180px" : "150px" }}>
					{option.label}
				</StyledMenuItem>
			))}
		</StyledSelect>
	</FormControl>
);

export { FilterSelect, FilterSelectMobile };
