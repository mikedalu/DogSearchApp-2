import React from "react";

function Header(props) {
	return (
		<div className="header">
			<h1>Classic Dog App </h1>
			<h2>Get to search the pictures of your favourite dog by breed</h2>
			{props.children}
		</div>
	);
}

export default Header;
