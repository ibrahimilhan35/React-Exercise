import React, { Component } from "react";

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: "Ibra"
        };
        console.log("I'm a constructor");
    }

    componentDidMount() {
        console.log("I'm component DidMount");
    }

    render() {
        console.log("I'm a render");
        return (
            <div>
                <p>My name is {this.state.name}</p>
                <button onClick={() => {
                    this.setState({ name: "Updated Ibra" });
                }}>Update Name</button>
            </div>
        );
    }
}

export default ClassComponent;
