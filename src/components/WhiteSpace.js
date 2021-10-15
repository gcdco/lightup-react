import React, { Component } from 'react';
import '../Cell.css';

const WhiteSpace = (props) => {
    const handleClick = () => {
        props.handleClick(props.coord)
    };
    // const light = <i className="far fa-lightbulb" style={{ fontSize: "4em", backgroundColor: '#ffff3f' }}></i>;
    return (
        <td className="Cell-White" onClick={handleClick} />
    );
};

export default WhiteSpace;