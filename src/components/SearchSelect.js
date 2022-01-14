import React from "react";

function SearchSelect(props) {
	const allDog = props.generalDogBreed.map((list, index) => {
		return <option key={index}>{list}</option>;
	});
	return (
		<div className="search-option">
			<select className="select " onChange={props.searchDogBreed}>
				<option>Choose dog by breed to search</option>
				{allDog}
			</select>
		</div>
	);
}

export default SearchSelect;
