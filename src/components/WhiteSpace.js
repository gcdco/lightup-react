import React, { Component } from 'react';
import '../Cell.css';

const WhiteSpace = (props) => {
    const handleClick = () => {
        props.handleClick(props.coord)
    };
    let classes = props.lit ? "Cell-Lit" : "Cell-White";
    classes = props.light ? "Cell-Light" : classes;
    return (
        <td className={classes} onClick={handleClick} />
    );
};

export default WhiteSpace;