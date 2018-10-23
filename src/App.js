import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component { // state-full component
  state = {
    persons: [
      { id: '1', name: 'Dora', age: '32' },
      { id: '2', name: 'Chai', age: '33' },
      { id: '3', name: 'Hari', age: '34' }
    ],
    showPersons: false,
    togglePersons: false,
    iteratePersons: false
  }

  changeStateHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: '32' },
        { name: 'Chai', age: '33' },
        { name: 'Hari', age: '33' }
      ]
    });
  }

  changedStateHandler = (e, id) => { // Dynamically update values of list
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    //const person = Object.assign({},this.state.persons[personIndex]);
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  personToggleHandler = (jsxWay, jsWay) => {
    this.setState({ showPersons: jsWay });
    this.setState({ togglePersons: jsxWay });
  }

  personIterateHandler = () => {
    this.setState({ iteratePersons: !this.state.iteratePersons });
  }

  deletePersonHandler = (index) => { // deleting person based on array index
    //const persons = this.state.persons;
    //const persons = this.state.persons.slice(); // gives a copy of object rather than reference 
    const persons = [...this.state.persons]; // gives a copy of object rather than reference 
    persons.splice(index,1) // array are reference objects so this will cause modification in original array
    this.setState({ persons: persons});
  }


  render() {

    const buttonStyle = { // inline styiling
      backgroundColor: 'lightblue',
      border: 'none',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '1px 2px #ccc',
      fontWeight: 'bold',
      color: 'navyblue',
      fontSize: '14px',
      margin: '20px'
    }


    let persons = null;
    if (this.state.togglePersons) { // Display content statically using JS way
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies : Cricket, Shuttle and Cooking</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clickMe={() => this.changeStateHandler('Dorababu')} /> {/* binding click using arrow function*/}
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}  />
        </div>
      );
    }

    let personsList = null;
    if (this.state.iteratePersons) { // Display content using iterator 
      personsList = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person name={person.name} age={person.age} key={person.id} changeMe={(e) => this.changedStateHandler(e, person.id)} deletePerson={() => this.deletePersonHandler(index)} /> 
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>My First React App</h1>
        <button style={buttonStyle} onClick={this.changeStateHandler.bind(this, 'Chodisetti Dorababu')}>Change Person Name</button> {/* binding click using bind and inlie style*/}
        <button style={buttonStyle} onClick={this.personToggleHandler.bind(this, this.state.togglePersons, !this.state.showPersons)}>Toggle Persons JSX way</button>
        <button style={buttonStyle} onClick={this.personToggleHandler.bind(this, !this.state.togglePersons, this.state.showPersons)}>Toggle Persons JS Way</button>
        <button style={buttonStyle} onClick={this.personIterateHandler}>Load Persons</button>
        {this.state.showPersons ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies : Cricket, Shuttle and Cooking</Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clickMe={() => this.changeStateHandler('Dorababu')} /> {/* binding click using arrow function*/}
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div> : null
        }
        {persons} {/* Conditional toggling  javascript way */}
        {personsList} {/* Display content using iterator */}
      </div>
    );
  }
}

export default App;
