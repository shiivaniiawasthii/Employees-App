import React from 'react'
import {Link} from "react-router-dom"

export const Nav=()=>{
  return (
    <nav>
        <Link to="/">Employees</Link>
        <Link to="/GroupedTeamMembers">Grouped Team Members</Link>
    </nav>
  )
}

