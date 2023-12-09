import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <div style={{Width:'1500px'}}>
      <div style={{alignItems:'center',justifyContent:'center',justifyItems:'center',justifySelf:'center'}}>
      <UserContextProvider>
      <div>This is Shubhanshu Sneh</div>
      <Login/>
      <Profile/>
    </UserContextProvider>

      </div>
    </div>
    
  )
}

export default App
