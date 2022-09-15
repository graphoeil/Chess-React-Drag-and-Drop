// Imports
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import Knight from "./Knight";

// Component
const Board = () => {

	// Knight position
	const [knightPosition, setKnightPosition] = useState([4, 3]);

	// Render the square of the board
	const renderSquare = (i, knightPosition) => {
		const x = i % 8;
		const y = Math.floor(i / 8);
		return(
			<div key={ i } style={ { width:'12.5%', height:'12.5%' } }>
				<BoardSquare x={ x } y={ y } knightPosition={ knightPosition } setKnightPosition={ setKnightPosition }>
					{ renderPiece(x, y, knightPosition) }
				</BoardSquare>
			</div>
		);
	};

	// Is knight in the square
	const renderPiece = (x, y, [knightX, knightY]) => {
		if (x === knightX && y === knightY){
			return <Knight/>
		}
	};

	// Squares
	const squares = [];
	for (let i = 0 ; i < 64 ; i++){
		squares.push(renderSquare(i, knightPosition));
	}

	// Return
	return(
		<DndProvider backend={ HTML5Backend }>
			<div style={ {
				width:'100%',
				height:'100%',
				display:'flex',
				flexWrap:'wrap'
			} }>
				{ squares }
			</div>
		</DndProvider>
	);

};

// Export
export default Board;