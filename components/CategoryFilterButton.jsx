const CategoryFilterButton = ({ buttonLabel, isActive, category, onClick }) => {
	return (
		<button onClick={() => onClick(category)} className={"filterbtn catbtn " + (isActive ? "active" : "")}>
			{buttonLabel}
		</button>
	);
};

export default CategoryFilterButton;
