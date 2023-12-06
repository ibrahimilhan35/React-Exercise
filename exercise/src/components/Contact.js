import React, { useState } from "react";
import "../Contact.css";

function ContactForm() {
  const [isFormVisible, setFormVisibility] = useState(false);

  const handleShowForm = () => {
    setFormVisibility(true);
  };

  return (
    <div>
      <button className="btn btn-dark mt-2 mb-4" id="showForm" onClick={handleShowForm}>
        Drop us a line!
      </button>

      {isFormVisible && (
        <div className="ContactForm">
          <form action="submit-form.php" method="post" className="form-container">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark" id="submitForm">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
