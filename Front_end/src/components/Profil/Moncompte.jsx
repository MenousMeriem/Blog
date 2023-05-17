import React , {useState, useEffect}from 'react'
import {toast} from "react-toastify"
import axios from 'axios'

function Moncompte() {
  const [data, setData] = useState([])   
  const user = localStorage.getItem('Utilisateur')
  const userObject = JSON.parse(user)
  const {accessToken,_id} = userObject     
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
    useEffect(()=>{
      const fetchData = async() => {
        try {
            const reponse = await axios.get('http://localhost:5000/Utilisateur/AfficherUtilisateur',config)
            setData(reponse.data)
        } catch (error) {
          toast.error(error.message)            
        }
    }
        fetchData()
    }, [])
  return (
    <div>
        <h1 className='text-5xl font-bold p-10 '> Mon profil</h1>
        <h2 className='px-10'> Gérer les paramètres de votre profil </h2>
        <div className='flex items-center justify-center '>
            <div className='px-10 py-10 flex flex-col w-96'>
                <span className="text-base py-2">Votre mail : </span>
                <span className="text-base py-2">{data.mail}</span>                                
                {/* <input type="text" placeholder="Votre nom" className="input input-bordered input-primary w-full max-w-xs" /> */}
                <span className="text-base py-2 mt-5">Votre mot de passe : </span>
                {/* <span className="text-base py-2">********</span> */}
                {/* <input type="password" placeholder="Votre mot de passe" className="input input-bordered input-primary w-full max-w-xs" /> */}
            </div>
        </div>
        <div className='flex flex-row items-center justify-center '> 
            <button className="btn btn-primary mr-3">Modifier</button>
            <button className="btn btn-primary">Supprimer</button>
        </div>
    </div>
  )
}

export default Moncompte