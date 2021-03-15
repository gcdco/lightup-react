
const Space = ({ onSwitch, space }) => {
    return (
            <button
                className={`${space.lit ? 'lit' : ''} ${space.light ? 'light' : ''} ${space.number ? 'number' : ''} ${space.black ? 'black' : ''}`}
                onClick={() => onSwitch(space.id)}> 
                    {`${space.number ? space.value : ''}`}
            </button>
    )
}

// const lightStyle = {
//     backgroundImage: 'url("./img/lightbulb350.png")'
// }

export default Space; 