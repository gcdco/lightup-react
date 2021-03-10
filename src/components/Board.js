import Space from './Space'

const Board = ({ onSwitch, spaces}) => {
    function renderspace () {
        <Space 
            key={space.id}
            space={space}
            onSwitch={onSwitch} 
        />
    }


    return (
            // {spaces.map((space) => (
            //     <Space 
            //         key={space.id}
            //         space={space}
            //         onSwitch={onSwitch} 
            //     />
            // ))}

    )
}


export default Board;