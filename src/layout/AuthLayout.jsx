import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = ({children}) => {
  return (
    <div>
<div>Header</div>
        <div>{children}</div>
              <Outlet />
        <div>Footer</div>
    </div>
  )
}

export default AuthLayout