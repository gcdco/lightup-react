import React, { Component } from 'react';

const BlackSpace = (props) => {
    console.log(props)
    const divStyle = {
        color: 'white',
        backgroundColor: 'black'
    };

    return (
        <div style={divStyle}>
            <h1>BlackSpace</h1>
        </div>
    );
};

export default BlackSpace;