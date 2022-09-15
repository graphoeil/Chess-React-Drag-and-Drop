// Imports
import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import Square from "./Square";
import { ItemTypes } from "./Constants";
import BoardSquareOverlay from "./BoardSquareOverlay";

// Component
const BoardSquare = ({x, y, knightPosition, setKnightPosition, children}) => {
	
	// Variables
	const black = (x + y) % 2 === 1;

	// Can move knight on the clicked square ? L move
	const canMoveKnight = (toX, toY) => {
		const [x, y] = knightPosition;
		const dx = toX - x;
		const dy = toY - y;
		return ((Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2));
	};

	// Drop handler
	const [{ isOver, canDrop }, drop] = useDrop(() => ({
		accept:ItemTypes.KNIGHT,
		drop:() => setKnightPosition([x, y]),
		canDrop:() => canMoveKnight(x, y),
		collect:(monitor) => ({
			isOver:!!monitor.isOver(),
			canDrop:!!monitor.canDrop()
		})
		// Like useEffect, we must declare props to observe !!!!!!
	}),[x, y, knightPosition]);

	// Bug with chrome we can only drag once
	const [mouseOver, setMouseOver] = useState(false);
	const [dropable, setDropable] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setMouseOver(isOver);
		}, 0);
		return () => {
			clearTimeout(timer);
		};
	},[isOver]);
	useEffect(() => {
		const timer = setTimeout(() => {
			setDropable(canDrop);
		}, 0);
		return () => {
			clearTimeout(timer);
		};
	},[canDrop]);

	// Return
	return(
		<div ref={ drop } style={ {
			position:'relative',
			width:'100%',
			height:'100%'
		} }>
			<Square black={ black }>{ children }</Square>
			{ mouseOver && !dropable && <BoardSquareOverlay color="red"/> }
			{ !mouseOver && dropable && <BoardSquareOverlay color="yellow"/> }
			{ mouseOver && dropable && <BoardSquareOverlay color="green"/> }
		</div>
	);

};

// Export
export default BoardSquare;