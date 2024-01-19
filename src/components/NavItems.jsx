import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavItems = () => {
    const navItems =[
        {path: "/loans", link: "Loans"},
        {path: "/about", link: "About"},
        {path: "/login", link: "Login"},
        {path: "/contact", link: "Contact"},
      ]
  return (
    <> 
        {navItems.map(({path,link}) => <li className='p-8'>
        <NavLink to={path}>{link}</NavLink> </li>)}
        </>
  )
}