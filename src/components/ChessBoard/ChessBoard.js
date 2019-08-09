import React, { useState } from 'react';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Knight from '../ChessPiece/Knight';
import BoardSquare from './BoardSquare';

const ChessBoard = () => {
  const [knightPosition, moveKnight] = useState([1,0]);
  const squares = [];

  const renderPiece = (x, y, [knightX, knightY]) => {
    const isKnightHere = knightX === x && knightY === y;
    return isKnightHere ? <Knight /> : null;
  }

  const renderSquare = (i, knightPosition, moveKnight) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
  
    return (
      <BoardSquare x={x} y={y} knightPosition={knightPosition} key={i} moveKnight={moveKnight}>
        {renderPiece(x,y, knightPosition)}
      </BoardSquare>
    )
  }
  
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, moveKnight))
  }

  return(
    <DndProvider backend={HTML5Backend}>
      <div style={{
          width: 400,
          height: 400,
          display: 'flex',
          flexWrap: 'wrap',
          margin: '100px auto'
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
};


export default ChessBoard;
