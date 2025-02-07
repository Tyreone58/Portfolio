import { useState } from 'react';
import './style.css';

function ContactForm() {
  // State for first and last name
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleInputChange = (e) => {
    // Getting the name and value of the input field
    const { name, value } = e.target;

    // Update the corresponding state based on the input field
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if fields are empty
    if (!firstName.trim() || !lastName.trim()) {
      alert('Please enter both first and last names.');
      return;
    }

    // Alert the user and clear inputs
    alert(`Hello ${firstName.trim()} ${lastName.trim()}`);
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="container text-center">
      <h1>Hello {firstName} {lastName}</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
          aria-label="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
          aria-label="Last Name"
        />
        <button type="submit" disabled={!firstName.trim() || !lastName.trim()}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
