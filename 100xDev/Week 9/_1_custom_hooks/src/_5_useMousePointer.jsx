import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

// useMousePointer hook

const useMousePointer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return position;
}

const _5_useMousePointer = () => {
    const mousePointer = useMousePointer();

    return (
        <>
            <h1>Mouse Pointer Position</h1>
            <p>X: {mousePointer.x}</p>
            <p>Y: {mousePointer.y}</p>
        </>
    )
}


export default _5_useMousePointer
