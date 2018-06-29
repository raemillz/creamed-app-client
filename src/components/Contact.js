import React from 'react';
import ContactPageImage from './ContactPageImage';


class Contact extends React.Component {
  render () {
    return (
      <div className="">
        <h1 className="contact">Contact Us</h1>
        <h3 className="card-title">For further inquiries or suggestions, email us at getcremedelacream@gmail.com</h3>
        <ContactPageImage/>
      </div>
    )
  }
}

export default Contact;
