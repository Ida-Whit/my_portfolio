import { useState } from 'react';
import { validateName, validateEmail } from '../../components/FormValidation';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (event) => {
    const nameValue = event.target.value;
    setName(nameValue);
    setNameError(validateName(nameValue));
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailError(validateEmail(emailValue));
  };

    return (
    <div>
        <h1>Contact Me</h1>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Name</span>
        <input type="text" className="form-control" placeholder="Name" aria-label="Name" value={name} onChange={handleNameChange} onBlur={handleNameChange}></input>
        {nameError && <div className='error'>{nameError}</div>}
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Email Address</span>
        <input type="text" className="form-control" placeholder="Email Address" aria-label="Email Address" value={email} onChange={handleEmailChange} onBlur={handleEmailChange}></input>
        {emailError && <div className="error">{emailError}</div>}
      </div>
      <div className="input-group">
        <span className="input-group-text">Message</span>
        <textarea className="form-control" aria-label="Message" value={message} onChange={(event) => setMessage (event.target.value)}></textarea>
      </div>
    </div>
    );
  }