import React, { useState, useEffect } from "react";

const FunctionalComponent = () => {
    const [name, setName] = useState("Ibra");

    useEffect(() => {
        console.log("I'm component DidMount");
    }, []);

    console.log("I'm a render");

    return (
        <div>
            <p>My name is {name}</p>
            <button onClick={() => setName("Updated Ibra")}>Update Name</button>
        </div>
    );
};

export default FunctionalComponent;
