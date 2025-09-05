import React, { useContext } from 'react'
import { SessionContext } from '../context/authContext'

const DashBoard = () => {

const {session} = useContext(SessionContext)

console.log(session,"session")

  return (
    <div>DashBoard</div>
  )
}

export default DashBoard