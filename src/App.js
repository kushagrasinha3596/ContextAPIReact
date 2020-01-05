import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Context from './context/context';

class App extends Component {
  debugger
  constructor(props){
    super(props);
    console.log(this.props);
    debugger
  }

  state = {
    persons: [
      {id: 'x12',name: 'A', age: 20},
      {id: 'x13',name: 'B', age: 21},
      {id: 'x14',name: 'C', age: 22}
    ],
    city: 'New Delhi',
    showPerson: false,
    testName: "kush",
  }
  togglePerson = () => {
    this.setState({
      showPerson: !this.state.showPerson
    });
  }

  changeNameHandler = (name) =>{
    this.setState({
      persons: [
        {name: 'AA', age: 20},
        {name: name, age: 21},
        {name: 'CC', age: 22}
      ]
    });
  }

  shouldComponentUpdate(){
    return true;
  }

  toggleTestName = () => {
    this.setState({
      testName: "Kushagra Sinha"
    });
  }

  render(){
    debugger
    console.log("Hello India ");
    var person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            key = { person.id }
            name={ person.name } 
            age={ person.age}/>
          })};
        </div>
      )
    }
    return (
      <div className="App">
        <button onClick={()=> this.togglePerson() }>Toggle Person</button>
        <button onClick={this.toggleTestName}>Toggle Test Name</button>
        <Context.Provider value={{name: this.state.testName}}>
          {this.props.children[0]}
          {this.props.children[1]}
        </Context.Provider>
        {person}
      </div>
    );
  }
}

export default App;
