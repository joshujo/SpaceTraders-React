import { useState } from 'react';
import Test from '../ApiCalls/test';

function Something() {

  const savedToken = sessionStorage.getItem('token');
  const [token, setToken] = useState(savedToken || '');

  const handleChange = (event: any) => {
    event.preventDefault();
    setToken(event.target.value);
  }

  const onSubmit = async (event: any) => {
    event.preventDefault();
    await Test(token) ? console.log('Success') : console.log('Failure');
    console.log(await Test(token));
    sessionStorage.setItem('token', token);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
      <label htmlFor="token">Token: </label>
      <input type="text" 
      id="token" 
      name="token" 
      value={token}
      onChange={handleChange}></input>
      </form>
    </div>
  );
}

export default Something;