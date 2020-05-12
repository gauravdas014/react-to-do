import React from "react";
import logo from "./LCO-logo-white.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: "",
      });
    }
  }

  render() {
    return (
      <div>
        <img src={logo} alt="logo" width="100" className="logo" />
        <h1 className="app-title">LCO ToDo App</h1>

        <div className="container">
          Add an Item...
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a Todo"
          />
          <button className="add-btn">Add Todo</button>
          <div className="list">
            <ul>
              <li>
                <input type="text" />
                Learn React
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
