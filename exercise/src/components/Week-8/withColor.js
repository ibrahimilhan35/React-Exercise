import React, { Component } from "react";
/* A Higher-Order Component (HOC) called withColor that wraps 
the ColorButton component and provides it with the necessary state and functionality:*/

const withColor = (WrappedComponent) => {
  class WithColor extends Component {
    constructor(props) {
      super(props);

      this.state = {
        backgroundColor: "WHITE",
        buttonName: "Change Color",
      };
    }

    handleButtonClick = () => {
      this.setState((prevState) => ({
        backgroundColor: prevState.backgroundColor === "WHITE" ? "BLACK" : "WHITE",
      }));
    };

    render() {
      const { backgroundColor, buttonName } = this.state;

      return (
        <WrappedComponent
          backgroundColor={backgroundColor}
          buttonName={buttonName}
          onButtonClick={this.handleButtonClick}
        />
      );
    }
  }

  return WithColor;
};

export default withColor;
