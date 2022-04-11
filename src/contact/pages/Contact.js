import React from "react";

import ContactForm from "../components/ContactForm";

const Contact = (props) => {
  return (
    <div className="container">
      <div className="content">
        <h1>Contact</h1>
        <div className="row">
          <div className="col">
            <ContactForm />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
