import React, { Component } from 'react';

const WhiteSpace = (props) => {
    const light = <i class="far fa-lightbulb" style={{ fontSize: "4em", backgroundColor: '#ffff3f' }}></i>;
    return (

        <div>
            <h1>WhiteSpace</h1>
            {light}
        </div>
    );
};

WhiteSpace.defaultProps = {
    light: false,
    lit: false,
    number: false,
    black: false,
    value: null
};

export default WhiteSpace;