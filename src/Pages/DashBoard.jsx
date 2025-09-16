import React, { useContext } from 'react'
import { SessionContext } from '../context/authContext'
import { useSelector } from 'react-redux'

const DashBoard = () => {

  const {email,firstName,lastName,role} = useSelector((state)=>state.user)



// const {session} = useContext(SessionContext)

// console.log(session,"session")

  return (
    <div>DashBoard

      <h1>Hello <span className='font-bold text-2xl'>{firstName} {lastName}/{role}</span>.</h1>
      <p>Your email is {email} </p>
    </div>
  )
}

export default DashBoard