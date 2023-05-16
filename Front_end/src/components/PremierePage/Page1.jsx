import React from 'react'
import { NavLink } from 'react-router-dom'

function Page1() {
  return (
    <div>
        <div className="hero min-h-screen" 
            style={{ backgroundImage:`url("../../assets/image1.jpg")`}}>
            <div className="hero-overlay bg-opacity-60">
            </div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <div className="">
                        <NavLink to={'/Inscription'} className="btn mr-4 bg-rose-900 text-white">S'inscrire</NavLink>
                        <NavLink to={'/Connexion'} className="btn btn-outline">Connexion</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page1