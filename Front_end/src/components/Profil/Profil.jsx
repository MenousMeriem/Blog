import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'



function Profil() {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <ul className="menu p-4 w-80 bg-rose-900 text-white border-8 border-x-slate-500">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/Profil/Profil'}> Mon compte </Link></li>
                        <li><Link to={'/Profil/Article'}> Mes articles</Link></li>
                    </ul>
                </div>
                <div className="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}
                    {/* Mon compte */}
                    <Outlet/>   
                    {/* Ajouter un article */}
                    
                </div> 
                
            </div>
        </div>
    )
}

export default Profil