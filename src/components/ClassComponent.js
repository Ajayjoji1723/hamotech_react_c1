import { Component } from "react";

class Userprofile extends Component {
  state = { count: 0 };
  hadnleClick() {
    console.log("Handle clicked");
  }
  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { name, age } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>Hello {name}</h1>
        <button onClick={this.onIncrement}>Increment!</button>
        <p>count: {count}</p>
      </div>
    );
  }
}

export default Userprofile;
