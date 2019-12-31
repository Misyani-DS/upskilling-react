import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonsState] = useState({
    persons: [
    {name:'Nurul', age: 23},
    {name:'Misyani', age: 24},
    {name:'Misya', age: 25}
    ],
    otherState: 'some other value'

  });

  const switchNameHandler = () => {
//     // console.log('Was Clicked!');
    setPersonsState({  
    persons: [
      {name:'NurulMisyani', age: 23},
      {name:'Misyani', age: 24},
      {name:'Misya', age: 26}
    ]
     });
  };

   return (
      <div className="App">
      <h1> Hi, I'm a React App</h1>
      <p> This is really working!</p>
      <button onClick={switchNameHandler}> Switch Name </button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: Racing </Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
}

// class App extends Component {

//   state = {
//     persons: [
//     {name:'Nurul', age: 23},
//     {name:'Misyani', age: 24},
//     {name:'Misya', age: 25}
//     ],
//     otherState: 'some other value'
//   };

//   switchNameHandler = () => {
//     // console.log('Was Clicked!');
//     this.setState({  
//     persons: [
//       {name:'NurulMisyani', age: 23},
//       {name:'Misyani', age: 24},
//       {name:'Misya', age: 26}
//     ]
//      })
//   }


//   render() {
//     return (
//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <h1 className="App-title">Welcome to React</h1>
//       //   </header>
//       //   <p className="App-intro">
//       //     To get started, edit <code>src/App.js</code> and save to reload.
//       //   </p>
//       // </div>
//       <div className="App">
//       <h1> Hi, I'm a React App</h1>
//       <p> This is really working!</p>
//       <button onClick={this.switchNameHandler}> Switch Name </button>
//       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing </Person>
//       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//       </div>
//     );

//     // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App !!!!'));
//   }
// }

export default app;
