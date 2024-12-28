// import React, { useEffect, useState } from 'react'
// import Login from './components/Auth/Login'
// import Empdashboard from './components/Dashboard/Empdashboard'
// import Admindashboard from './components/Dashboard/Admindashboard'
// import { getLocalStorage, setLocalStorage } from './utils/localstorage'
// import { useContext } from 'react'
// import { AuthContext } from './context/AuthProvider'

// const App = () => {
//   // useEffect(()=>{
//   //   setLocalStorage()
//   //   getLocalStorage()
//   // })
//   const[user,setUser] = useState(null)
//   const Authdata = useContext(AuthContext)

//   const handleLogin = (email,password)=>{
//     if(email == 'admin@me.com' && password == '123'){
//       setUser('admin')
//     }else if(Authdata && Authdata.employees.find((e)=>email == e.email && e.password == password)){
//       localStorage.setItem('loggedInEmployeeEmail', email);
//       setUser('employee')
//     }else{
//       alert("INVALID")
//     }
//   }
//   // handleLogin('admin@me.com',123)

//   return (
//     <>
//     {!user ? <Login handleLogin = {handleLogin} />:''}
//     {user == 'admin' ? <Admindashboard/> : <Empdashboard/>}
//     </>
//   )
// }

// export default App

