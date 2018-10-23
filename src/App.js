import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component { // state-full component
  state = {
    persons: [
      { name: 'Dora', age: '32' },
      { name: 'Chai', age: '33' },
      { name: 'Hari', age: '34' }
    ],
    showPersons: false,
    togglePersons : false
  }

  changeStateHandler = (newName) => {
    console.log('I am clicked');
    this.setState({
      persons: [
        { name: newName, age: '32' },
        { name: 'Chai', age: '33' },
        { name: 'Hari', age: '33' }
      ]
    });
  }

  changedStateHandler = (e) => {
    console.log('I am clicked');
    this.setState({
      persons: [
        { name: 'Dora Babu', age: '32' },
        { name: e.target.value, age: '33' },
        { name: 'Hari', age: '33' }
      ]
    });
  }

  personToggleHandler = (jsxWay, jsWay) => {
    console.log('jsxWay',jsxWay)
    console.log('jsWay',jsWay)
    this.setState({showPersons: jsWay});
    this.setState({togglePersons: jsxWay});
  }

  render() {

    const buttonStyle = {
      backgroundColor: 'lightblue',
      border: 'none',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '1px 2px #ccc',
      fontWeight: 'bold',
      color: 'navyblue',
      fontSize: '14px',
      margin:'20px'
    }

    let persons = null;
    if(this.state.togglePersons) {
      persons = (
        <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies : Cricket, Shuttle and Cooking</Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clickMe={() => this.changeStateHandler('Dorababu')} changeMe={this.changedStateHandler} /> {/* binding click using arrow function*/}
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div>
      );
    }

    return (
      <div className="App">
        <h1>My First React App</h1>
        <button style={buttonStyle} onClick={this.changeStateHandler.bind(this, 'Chodisetti Dorababu')}>Change Person Name</button> {/* binding click using bind and inlie style*/}
        <button style={buttonStyle} onClick={this.personToggleHandler.bind(this, this.state.togglePersons, !this.state.showPersons)}>Toggle Persons JSX way</button>
        <button style={buttonStyle} onClick={this.personToggleHandler.bind(this, !this.state.togglePersons, this.state.showPersons)}>Toggle Persons JS Way</button>
        {/* Conditional toggling */}
        {this.state.showPersons ? 
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies : Cricket, Shuttle and Cooking</Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clickMe={() => this.changeStateHandler('Dorababu')} changeMe={this.changedStateHandler} /> {/* binding click using arrow function*/}
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div> : null
        }
        {persons} {/* Conditional toggling  javascript way*/}
      </div>
    );
  }
}

export default App;
