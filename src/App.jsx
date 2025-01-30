import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './contexts/AuthProvider'
function App() {

  const [user, setUser] = useState(null);

  const [loggedInUserData, setLoggedInUserData]= useState({})
  
  const [userData, setUserData] = useContext(AuthContext);

  
  useEffect(()=>{
   const loggedInUser = localStorage.getItem('loggedInUser');
  if(loggedInUser){
   const userData = JSON.parse(loggedInUser);
  setUser(userData.role)
  setLoggedInUserData(userData.data)
  }
  },[user,userData])
  


  const handleLogin  = (email,password)=>{

    if(email =='admin@me.com' && password =='123'){
      setUser({role:'admin'})
     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if (userData){
      const employee = userData.find((e)=>e.email==email && e.password == password)
     if(employee){
      setUser('employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
     }
   
    }else{

      alert('Invalid Credentials')
    }
  }

  

  return (
    <>
    {!user ? <Login handleLogin = {handleLogin} /> :''}

    {user ==='admin' ?<AdminDashboard changeUser = {setUser}/>:(user == 'employee'? <EmployeeDashboard changeUser ={setUser} data={loggedInUserData} />:null)}
    

    </>
  )
}

export default App