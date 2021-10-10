import React, { Component } from 'react';

const NumberSpace = (props) => {
    const divStyle = {
        color: 'white',
        backgroundColor: 'green'
    };

    return (
        <div style={divStyle}>
            <h1>NumberSpace {props.value}</h1>
            
        </div>
    );
};

export default NumberSpace;