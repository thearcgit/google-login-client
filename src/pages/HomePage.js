import React, { useEffect, useState } from 'react'
import Payment from '../components/Payment'
import Navbar from '../components/Navbar'
import axios from 'axios'

const HomePage = () => {
  const [user,setUser] = useState({})
  const getUser = async() => {
    try{
      const res = await axios.get("http://localhost:8080/user",{withCredentials:true})
      console.log('res ',res.data)
      setUser(res?.data)
    }catch(err){
      console.log(err)
    }
  }
  console.log('home',user)
  useEffect(()=>{
    getUser()
  },[])
  return (
    <>
    <Navbar user={user}/>
    <Payment />
      
    </>
  )
}

export default HomePage
