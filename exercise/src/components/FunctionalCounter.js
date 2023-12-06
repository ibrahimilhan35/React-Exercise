import React, { useState } from "react";

const FunctionalCounter = () => {
  const [count, updateCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleIncrease = () => {
    updateCount(count + 1);
    setShowMessage(false);
  };

  const handleDecrease = () => {
    // Check if count is greater than 0 before decrementing
    const newCount = Math.max(0, count - 1);
    updateCount(newCount);
    setShowMessage(newCount === 0);
  };

  return (
    <div>
      <h3>Functional Component Eaxample: Counter</h3>
      <p>Count: {count}</p>
      <button className="btn btn-dark mt-2" onClick={handleIncrease}>Increase</button>
      <button className="btn btn-dark mt-2" onClick={handleDecrease}>Decrease</button>
      {showMessage && <p>Count cannot be negative.</p>}
    </div>
  );
};

export default FunctionalCounter;
