import React, { Component } from 'react';
import '../Board.css';

const BlackSpace = (props) => {
    console.log(props)
    const divStyle = {
        color: 'white',
        backgroundColor: 'black'
    };

    return (
        <div className="BlackSpace">
        </div>
    );
};

export default BlackSpace;