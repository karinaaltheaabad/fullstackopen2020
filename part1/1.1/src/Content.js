import React from 'react';

const Content = (props) => {
    return (
        <div>
            <p>{ props.subheader}</p>
            <p>Exercises: {props.exercise}</p>
        </div>

    )
}

export default Content;