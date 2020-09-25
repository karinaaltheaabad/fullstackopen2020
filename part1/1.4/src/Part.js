import React from 'react';

const Part = (props) => {
    return (
        <div>
            <h3>{ props.subheader }</h3>
            <p>Exercises: { props.exercises }</p>
        </div>
    )
}

export default Part; 