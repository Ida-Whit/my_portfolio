import { useState } from 'react';
import { validateName, validateEmail } from '../../components/FormValidation';
import styles from '../Contact/Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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

  const handleBlur = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    let errorMessage = '';
    if(fieldName === 'name') {
      errorMessage = validateName(fieldValue);
      setNameError(errorMessage);
    } else if (fieldName === 'email') {
      errorMessage = validateEmail(fieldValue);
      setEmailError(errorMessage);
    }

    if(errorMessage) {
      setModalMessage(errorMessage);
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

    return (
    <div>
        <h1>Contact Me</h1>
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Name</span>
        <input type="text" className="form-control" placeholder="Name" aria-label="Name" value={name} onChange={handleNameChange} onBlur={handleBlur} name="name"></input>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Email Address</span>
        <input type="text" className="form-control" placeholder="Email Address" aria-label="Email Address" value={email} onChange={handleEmailChange} onBlur={handleBlur} name="email"></input>
      </div>
      <div className="input-group">
        <span className="input-group-text">Message</span>
        <textarea className="form-control" aria-label="Message" value={message} onChange={(event) => setMessage (event.target.value)}></textarea>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
      {showModal && (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
              <p>{modalMessage}</p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    );
  }