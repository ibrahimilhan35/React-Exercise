import React from "react";

const CardList = ({ data }) => {
  return (
    <div>
      {data.map((person) => (
        <div key={person.id} className="card">
          <h2>{person.name}</h2>
          <p>Age: {person.age}</p>
          <p>Email: {person.email}</p>
          {/* Adjust the image source path relative to the public directory */}
          {/* <img src={process.env.PUBLIC_URL + '/' + person.image} alt={person.name} /> */}
        </div>
      ))}
    </div>
  );
};

export default CardList;
