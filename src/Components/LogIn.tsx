import { useState } from 'react';
import Test from '../ApiCalls/test';
import '../CSS_Modules/module.logIn.css';
import Register from './Register';
import Modal from 'react-modal';

function LogIn() {

  const savedToken = sessionStorage.getItem('token');
  const [token, setToken] = useState(savedToken || '');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (event: any) => {
    event.preventDefault();
    setToken(event.target.value);
  }

  const onSubmit = async (event: any) => {
    event.preventDefault();

    if (await Test(token)) {
      sessionStorage.setItem('token', token);
      window.location.reload();
      const rememberMeCheckbox = document.getElementById('RememberMe') as HTMLInputElement;
      if (rememberMeCheckbox?.checked) {
        localStorage.setItem('token', token);
      }
    } else {
      console.log('Failure');
    }

  }


  const onRegister = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div className='loginPanel'>
      <h1>SpaceTraders</h1>
      <form onSubmit={onSubmit}>
      <label htmlFor="token">Token: </label>
      <input type="text" 
      id="token" 
      name="token" 
      value={token}
      onChange={handleChange}></input>
      <br />
      <label htmlFor="RememberMe">Remember me? </label>
      <input type="checkbox" id="RememberMe" name="RememberMe"></input>
      <br />
      <input type="submit" value="Log In"></input>
      </form>
      <p>Don't have an account? <a href="#" onClick={onRegister}>Register here</a></p>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Register"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            width: '800px',
            height: '300px',
            margin: 'auto',
            backgroundColor: '#252847',
            borderRadius: '10px',
          }
        }}
      >
        <button onClick={closeModal}>Close</button>
        <Register />
      </Modal>

    </div>
  );
}

export default LogIn;