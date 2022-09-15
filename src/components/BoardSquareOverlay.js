// Imports
import React from "react";

// Component
const BoardSquareOverlay = ({ color }) => {

	// Return
	return <div style={ {
		position:'absolute',
		top:0,
		left:0,
		height:'100%',
		width:'100%',
		zIndex:1,
		opacity:0.5,
		backgroundColor:color
	} }/>;

};

// Export
export default BoardSquareOverlay;