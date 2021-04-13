import React, { Component } from 'react';

class Space extends Component {
    defaultProps = { 
        light: false,
        lit: false,
        number: false,
        black: false,
        value: null
     }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        const light = <i class="far fa-lightbulb" style={{fontSize: "4em", backgroundColor: '#ffff3f'}}></i>

        return ( 
            //<td>cell</td>
            <div>
                <h1>Space</h1>
                {light}
            </div>
         );
    }
}
 
export default Space;