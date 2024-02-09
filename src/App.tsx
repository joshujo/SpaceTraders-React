import './App.css'
import LogIn from './Components/LogIn'
import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import Main from './Components/Main'

Modal.setAppElement('#root')

function App() {
//   const savedLogin = localStorage.getItem('token')

//   if (savedLogin) {
//     sessionStorage.setItem('token', savedLogin)
//   }

//   const isLoggedIn = sessionStorage.getItem('token') ? true : false;
//   const token = sessionStorage.getItem('token')
//   const [login, setLogin] = useState(token ? true : false)

//  const checkLogin = () => {
//     setLogin(true)
//  }

//  const logOutConfirm = () => {
//     setLogin(false)
//   }

//   if (!isLoggedIn || !login) {
//   return (
//     <LogIn 
//     onSend={checkLogin}
    
//     />
//   )
//   } else {
//     return (
//         <Main token={token} 
//         logOutConfirm={logOutConfirm} />
//     )
//   }
// }

const [isAuthenticated, setIsAuthenticated] = useState(false)
const [token, setToken] = useState(sessionStorage.getItem('token') ?? localStorage.getItem('token') ?? '')

useEffect(() => {
  if (!token) {
  } else {
    sessionStorage.setItem('token', token)
    localStorage.setItem('token', token)
    setIsAuthenticated(true)
  }
}, [token])

useEffect(() =>{
  setToken(sessionStorage.getItem('token') ?? localStorage.getItem('token') ?? '')
  if (token) {
    setIsAuthenticated(true)
  }

})

const handleLogOut = () => {
  localStorage.removeItem('token')
  setToken('')
  setIsAuthenticated(false)
}

return (
  isAuthenticated  ? <Main handleLogOut={handleLogOut} /> : <LogIn setIsAuthenticated={setIsAuthenticated} />
)

}

export default App
