import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        name: "Sumitra",
        age: 23,
      },
      {
        name: "Nikita",
        age: 22,
      },
    ],
  };

  switchNameHandler = () => {
    console.log("Was clicked!");
  };

  render() {
    return (
      <div className="App">
        <h1>Hi,I am a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies:Dancing
        </Person>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,

    //   React.createElement("h1", { className: "App" }, "Does this work now")
    // );
  }
}

export default App;
