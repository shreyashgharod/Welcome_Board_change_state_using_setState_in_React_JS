import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  changeOfState = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <p>Enter your Name : </p>
        <input onChange={this.changeOfState} />

        <h1>Welcome : {this.state.name}</h1>
      </div>
    );
  }
}
