import React from 'react';
import './Person.css' // using external style sheet

const person = (props) => { // state-less component
    return ( 
        <div className='Person' onClick={props.deletePerson}> {/* <div className='Person' onClick={props.deletePerson}> */}
            <p onClick={props.clickMe}>I'm {props.name} and my age is {props.age} </p>  {/* binding props data dynamically and binding function refernce*/}
            <p>{props.children}</p> {/* getting child props */}
            <input type='text' onChange={props.changeMe} value={props.name} /> {/* two way data binding */}
        </div>
    );
}

export default person;