import React from 'react';
import Part from './Part';

const Content = (props) => {
    return (
        <Part subheader={ props.subheader } exercises = { props.exercise }/>
    )
}

export default Content;
