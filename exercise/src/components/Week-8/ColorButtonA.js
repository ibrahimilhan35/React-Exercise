import React, { PureComponent } from "react";
/* A Pure Component is a class component that extends React.PureComponent
and implements shouldComponentUpdate with a shallow prop and state comparison.*/


class ColorButtonA extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "WHITE",
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      backgroundColor: prevState.backgroundColor === "WHITE" ? "BLACK" : "WHITE",
    }));
  };

  render() {
    const { backgroundColor } = this.state;

    return (
      <button
        style={{ backgroundColor, color: "gray", padding: "10px", cursor: "pointer" }}
        onClick={this.handleButtonClick}
      >
        Change Color
      </button>
    );
  }
}

export default ColorButtonA;
