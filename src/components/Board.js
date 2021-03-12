import Space from './Space'

const Board = ({ onSwitch, spaces}) => {
    // function renderspace (space, id) {
    //     <Space 
    //         key={id}
    //         space={space}
    //         onSwitch={onSwitch} 
    //     />
    // }


    return (         
        <div className ='space-container'>
            {spaces.map((space) => (
                <Space 
                    key={space.id}
                    space={space}
                    onSwitch={onSwitch} 
                />
            ))}
        </div>
    )
}


export default Board;