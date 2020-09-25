import React from 'react';
import Part from './Part';

const Content = (props) => {
    return (
        <Part part={ props.part.map(part => <h3>{part.name}</h3>) }/>
    )
}

export default Content;
