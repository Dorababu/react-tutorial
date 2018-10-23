import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.clickMe}>I'm {props.name} and my age is {props.age} </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changeMe} value={props.name} />
        </div>
    );
}

export default person;