// Imports
import React from "react";
import { ItemTypes } from "./Constants";
import { useDrag } from "react-dnd";

// Component
const Knight = () => {

	// Drag knight
	const [{ isDragging }, drag] = useDrag(() => ({
		type:ItemTypes.KNIGHT,
		collect:(monitor) => ({
			isDragging:!!monitor.isDragging()
		})
	}));

	// Return
	return(
		<div ref={ drag } style={ {
			opacity:isDragging ? 0.5 : 1,
			fontSize:'100px',
			cursor:'move'
		} }>♘</div>
	);

};

// Export
export default Knight;