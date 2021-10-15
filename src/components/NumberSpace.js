import React, { Component } from 'react';
import '../Cell.css';

const NumberSpace = (props) => {
    const handleClick = () => {
        props.handleClick(props.coord)
    };
    return (
        <td className="Cell-Number" onClick={handleClick} >{props.value}</td>
    );
};

export default NumberSpace;