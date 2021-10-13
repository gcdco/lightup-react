import React, { Component } from 'react';
import '../Cell.css';

const WhiteSpace = (props) => {
    const handleClick = () => {

        props.handleClick(props.coord)
    };
    // const light = <i className="far fa-lightbulb" style={{ fontSize: "4em", backgroundColor: '#ffff3f' }}></i>;
    let classes = props.lit ? "Cell-Light" : "Cell-White";
    return (
        <td className={classes} onClick={handleClick} />
    );
};

export default WhiteSpace;