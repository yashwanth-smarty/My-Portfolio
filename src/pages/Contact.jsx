import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css"; // Import the CSS file for styling

const ContactForm = () => {
  const form = useRef(); // Use useRef to access form DOM element
  const [emailValid, setEmailValid] = useState(true); // State to track email validity

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Simple regex for email validation

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmailValid(emailRegex.test(email)); // Validate the email format
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!emailValid) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_vwdcwgc", // Replace with your EmailJS Service ID
        "template_x71z1ve", // Replace with your EmailJS Template ID
        form.current, // Reference to the form
        "hxzWeHrTgm6zLfDNC" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          e.target.reset(); // Reset the form after submission
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div>
      <h1 className="contact-header">Contact Me</h1>
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label className="contact-label">Your Name</label>
        <input type="text" name="user_name" className="contact-input" required />

        <label className="contact-label">Your Email</label>
        <input
          type="email"
          name="user_email"
          className="contact-input"
          required
          onChange={handleEmailChange} // Handle email validation
        />
        {!emailValid && (
          <p className="error-message">Please enter a valid email address.</p>
        )}

        <label className="contact-label">Message</label>
        <textarea name="message" rows="5" className="contact-textarea" required />

        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
