import React, { Component } from 'react';
import '../Cell.css';

const WhiteSpace = (props) => {
    const handleClick = () => {
        props.handleClick(props.coord)
    };
    let classes = props.lit ? "Cell-Lit" : "Cell-White";
    classes = props.light ? "Cell-Light" : classes;
    classes = (props.light && props.lit) ? "Cell-Light-Error" : classes;

    return (
        <td className={classes} onClick={handleClick}>
            {
                    props.light 
                ?
                    <div className={classes}></div>
                :
                    ''
            }

        </td>
    );
};

export default WhiteSpace;