import React, { useEffect, useState} from 'react'
import { Link, Navigate, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from "axios"


function Connexion() {
  const user = localStorage.getItem('Utilisateur')
  const navigate = useNavigate("/Accueil") 
  useEffect(() => {
    if(user) navigate('/Accueil')    
  }, [])

  const [form, setForm ] = useState({
    mail:"",
    mot_de_passe:""
  })

  useEffect(() => {
   
  }, [])

  const onChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {      
      const response = await axios.post('http://localhost:5000/Seconnecter/seConnecter', form)

      if(response.data){
        localStorage.setItem("Utilisateur",JSON.stringify(response.data)) 
        navigate('/Accueil')
      }
       
      
    } catch (error) {
      const errorMessage = error && error.request && error.request.responseText ? JSON.parse(error.request?.responseText).message  : error.message
      toast.error(errorMessage)
    }
  }

  
  return (
    <div>
        <div className='h-screen bg-white pt-24'>
            <div className='mx-auto '>  {/* w-44 h-44  */}
          <h1 className='text-center text-6xl mb-5 font-bold'> Connexion</h1>
            {/* <img className='rounded-full ' src={image}/> */}
          </div>
          <div className='flex justify-center items-center '>
            <div className="form-control w-full max-w-xs">
              <label className="label mt-4">
                <span className="label-text">Adresse e-mail </span>
              </label>
              <form onSubmit={handleSubmit}>
                <input type="email" name='mail' value={form.mail} onChange={onChange} placeholder="Votre email" required className="input input-bordered input-primary w-full max-w-xs" />
              <label className="label mt-4">
                <span className="label-text">Mot de passe  </span>
              </label>
                <input type="password" name="mot_de_passe" value={form.mot_de_passe} placeholder="Votre mot de passe" onChange={onChange} required className="input input-bordered input-primary w-full max-w-xs" />
              <div className='pt-10 flex justify-center'>
                <button type='submit' className='btn bg-red-900 text-white'> Connexion </button>
              </div>
              </form>
              <label className="label mt-5 ml-1">
                <span className="label-text"> Vous n'avez pas de compte ? <Link to="/Inscription"  className='font-bold	underline' >Créer un compte</Link>  </span>
              </label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Connexion