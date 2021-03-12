const Space = ({ onSwitch, space }) => {
    return (
            <button
                className={`${space.lit ? 'lit' : ''} ${space.number ? 'number' : ''}`}
                onClick={() => onSwitch(space.id)}> 
                    {/* {`${space.number ? space.id : ''}`} */}
            </button>
    )
}

export default Space; 