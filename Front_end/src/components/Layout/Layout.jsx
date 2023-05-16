import React from 'react'
import {useLocation, Outlet} from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Layout() {
    const locaion = useLocation()
    if(location.pathname == "/Page" || locaion.pathname === '/Connexion' || location.pathname === "/Inscription") 
    {return (
        <div>
            <main className=''>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )} else {
    return (
        <div>
            <Navbar/>
            <main className=''>
                <Outlet/>
            </main>
            <Footer/>
        </div>
  )
}}

export default Layout