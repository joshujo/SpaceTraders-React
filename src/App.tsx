import './App.css'
import LogIn from './Components/LogIn'
import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import Main from './Components/Main'

Modal.setAppElement('#root')

function App() {
  const savedLogin = localStorage.getItem('token')

  if (savedLogin) {
    sessionStorage.setItem('token', savedLogin)
  }

  const isLoggedIn = sessionStorage.getItem('token') ? true : false;
  const token = sessionStorage.getItem('token')
  const [login, setLogin] = useState(isLoggedIn)

  if (!login) {
  return (
    <LogIn />
  )
  } else {
    return (
      <Main token={token} />
    )
  }
}

export default App
