import React from 'react';

const Square = ({ black, children, onClick }) => {
  const fill = black ? 'black' : 'white';
  const pieceColor = black ? 'white' : 'black'; 
  return <div 
    onClick={onClick}
    style={{
      background: fill,
      width: '100%',
      height: '100%',
      color: pieceColor,
    }}>
      {children}
    </div>
  ;
}

export default Square;