import React from 'react'
import { Outlet } from 'react-router'

const AppLayout = ({children}) => {
  return (
    <div>
<div>Navbar</div>

        <div>{children}</div>
              <Outlet />        
        <div>Footer</div>
    </div>
  )
}

export default AppLayout