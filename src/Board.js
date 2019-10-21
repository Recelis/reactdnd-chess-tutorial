import React from "react";
import Square from './Square.js';
import Knight from './Knight.js';

export default function Board({knightPosition}){
    const squares = [];
    for (let ii =0; ii < 64; ii++){
        squares.push(renderSquare(ii, knightPosition));
    }
    return (
        <div 
            style = {{
                width:'100%',
                height:'100%',
                display: 'flex',
                flexWrap: 'wrap' 
            }}
        >
            {squares}
        </div>
    )
}

function renderSquare(ii, [knightX, knightY]){
    const x = ii %8;
    const y = Math.floor(ii/8);
    const black = (x + y) % 2 === 1;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knight /> : null;
    return( 
        <div key={ii} style={{width: '12.5%', height: '12.5%'}}>
            <Square black={black}>{piece}</Square>
        </div>
    )
}