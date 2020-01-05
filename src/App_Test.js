import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {

  const [initialState, stateUpdateFunction] = useState({
    persons: [
      {name: 'A', age: 20},
      {name: 'B', age: 21},
      {name: 'C', age: 22}
    ],
    city: 'New Delhi'
  });

  const [otherState, updateOtherState] = useState({
    city: 'New Delhi'
  });

  console.log(initialState);

  const changeNameHandler = () =>{
    stateUpdateFunction({
      persons: [
        {name: 'AA', age: 20},
        {name: 'BB', age: 21},
        {name: 'CC', age: 22}
      ]
    });
  }

    return (
      <div className="App">
        <button onClick={ changeNameHandler }>Change Name</button>
        <Person name={initialState.persons[0].name} age={initialState.persons[0].age}/>
        <Person name={initialState.persons[1].name} age={initialState.persons[1].age}>My hobby is Car Racing</Person>
        <Person name={initialState.persons[2].name} age={initialState.persons[2].age}>My hobby is Cooking</Person>
      </div>
    );
}

export default App;
