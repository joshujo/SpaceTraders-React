import { useEffect, useState } from 'react';
import Test from '../ApiCalls/test';
import '../CSS_Modules/module.logIn.css';
import Register from './Register';
import Modal from 'react-modal';
import infopanel from '../ApiCalls/infopanel';


function LogIn({ setIsAuthenticated }: { setIsAuthenticated: any }) {

  const savedToken = sessionStorage.getItem('token');
  const [token, setToken] = useState(savedToken || '');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },
  [])
    

  const handleChange = (event: any) => {
    event.preventDefault();
    setToken(event.target.value);
  }

  const onSubmit = async (event: any) => {
    event.preventDefault();

    if (await Test(token)) {
      sessionStorage.setItem('token', token);
      // window.location.reload();
      const rememberMeCheckbox = document.getElementById('RememberMe') as HTMLInputElement;
      if (rememberMeCheckbox?.checked) {
        localStorage.setItem('token', token);

            const result = await infopanel(token);
            const { data } = await result;
            const { symbol } = await data;

            const obj = {
              symbol: symbol,
              token: token,
            }

            const existingUsers = localStorage.getItem('users');
            const users = existingUsers ? JSON.parse(existingUsers) : [];
            users.push(obj);
            localStorage.setItem('users', JSON.stringify(users));

      }
      setIsAuthenticated(true);

      



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

  const handleRegister = (token: string) => {
    setToken(token);
    setIsAuthenticated(true);
  }

  return (
    <>
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
      <p
      style={{
        fontSize: '0.8em',
      }}
      >Don't have an account? <a href="#" onClick={onRegister}>Register here</a></p>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Register"
        style={{
          overlay: {
            backgroundColor: 'rgba(25, 34, 48, 0.5)'
          },
          content: {
            width: '800px',
            height: '300px',
            margin: 'auto',
            backgroundColor: '#192230',
            borderRadius: '10px',
}
        }}
        {...(isMobile && {style: {
          content: {
            width: '80%',
            height: '300px',
            margin: 'auto',
            backgroundColor: '#192230',
            borderRadius: '10px',
            ...(isMobile && {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }),
          }
        
        }})}
      >
        <button onClick={closeModal}>Close</button>
        <Register 
          handleRegister={() => handleRegister(token)}
        />
      </Modal>
        
    </div>
    </>
  );
}

export default LogIn;