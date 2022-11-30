import React from 'react';

const Tasks = () => {
    const name = 'Sahdif'
    const styles = {
        color: "red",
        fontSize : 40
    }
    return (


        <div className='tasks_wrapper'>

            <h3>Hi {name}, here are your tasks:</h3>

        <div className='tasks'>
            <input type='checkbox'/>
            <p style={styles}>Read one Chapter of book</p>
        </div>

        </div>
    );
}

export default Tasks;
