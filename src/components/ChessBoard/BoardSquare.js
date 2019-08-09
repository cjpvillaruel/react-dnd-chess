import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../constants/itemTypes';
import Square from './Square';
import { default as Overlay } from './SquareOverlay';
import { canMoveKnight } from '../Game';


export default function BoardSquare({ knightPosition, x, y, children, moveKnight }) {
  const black = (x + y) % 2 === 1;

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    drop: () => moveKnight([x, y]),
    canDrop: () => canMoveKnight(knightPosition, x, y),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  })
  
  return (
    <div
      ref={drop}  
      style={{
        position: 'relative',
        width: '12.5%',
        height: '12.5%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}

    </div>
  )
}
