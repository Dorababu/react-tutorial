import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {name: 'Dora', age: '32'},
      {name: 'Chai', age: '33'},
      {name: 'Hari', age: '34'}
    ]
  }

  changeStateHandler = (newName) => {
    console.log('I am clicked');
    this.setState({
      persons : [
        {name: newName, age: '32'},
        {name: 'Chai', age: '33'},
        {name: 'Hari', age: '33'}
      ]
    });
  }

  changedStateHandler = (e) => {
    console.log('I am clicked');
    this.setState({
      persons : [
        {name: 'Dora Babu', age: '32'},
        {name: e.target.value, age: '33'},
        {name: 'Hari', age: '33'}
      ]
    });
  }

  render() {
    return (
      <div className="App">
       <h1>My First React App</h1>
       <button onClick={this.changeStateHandler.bind(this, 'Chodisetti Dorababu')}>Click Me</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies : Cricket, Shuttle and Cooking</Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clickMe={() => this.changeStateHandler('Dorababu')} changeMe={this.changedStateHandler} />
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
