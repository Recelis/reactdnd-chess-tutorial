import React from 'react'

export default function Square({ black, children }) {
    const fil = black ? 'black': 'white'
    const stroke = black ? 'white': 'black'
    return (
        <div style={{ 
            backgroundColor: fil, 
            color: stroke,
            width: '100%',
            height: '100%'
        }} 
        >
            {children}
        </div>
    )
}