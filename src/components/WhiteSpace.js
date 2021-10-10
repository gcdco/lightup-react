import React, { Component } from 'react';

const WhiteSpace = (props) => {
    const light = <i className="far fa-lightbulb" style={{ fontSize: "4em", backgroundColor: '#ffff3f' }}></i>;
    return (

        <div>
            <h1>WhiteSpace</h1>
            {light}
        </div>
    );
};

export default WhiteSpace;