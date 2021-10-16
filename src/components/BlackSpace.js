import React from 'react';
import '../Cell.css';

const BlackSpace = (props) => {
    const handleClick = () => {
        props.handleClick(props.coord)
    };

    return (
        <td className="Cell-Black" onClick={handleClick}/>
    );
};

export default BlackSpace;