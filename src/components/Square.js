// Imports
import React from "react";

// Component
const Square = ({ black, children }) => {

	// Styles
	const fill = black ? 'black' : 'white';
	const stroke = black ? 'white' : 'black';

	// Return
	return(
		<div style={ {
			backgroundColor:fill,
			color:stroke,
			width:'100%',
			height:'100%',
			overflow:'hidden',
			textAlign:'center',
			lineHeight:'130px',
		} }>
			{ children }
		</div>
	);

};

// Export
export default Square;