import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


function Navbar() {
    const navigate = useNavigate()
    const onClick =  (e) => {
        const user = localStorage.getItem('Utilisateur')
        if(user) localStorage.removeItem('Utilisateur')
        navigate('/Connexion')
      }

  return (
    <div className="navbar bg-white">
    <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ">
            <li><NavLink to={'/Accueil'}>Accueil</NavLink></li>
            <li><NavLink to={'/Categorie'}>Catégorie</NavLink></li>
            <li><NavLink to={'/Propos'}>A propos de nous</NavLink></li>
        </ul>
        </div>
        <NavLink to={'/Accueil'} className="btn btn-ghost normal-case text-xl">Blog</NavLink>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li><NavLink to={'/Accueil'}>Accueil</NavLink></li>
            <li><NavLink to={'/Categorie'}>Catégorie</NavLink></li>
            <li><NavLink to={'/Propos'}>A propos de nous</NavLink></li>
        </ul>
    </div>
    <div className="navbar-end">
        <NavLink to={'/Profil'} className="btn mr-4 bg-rose-900 text-white">Profil</NavLink>
        <button onClick={onClick} className="btn mr-4 bg-rose-900 text-white">Deconnexion</button>


    </div>
</div>
  )
}

export default Navbar