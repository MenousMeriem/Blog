import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'


function Inscription() {
  const [form, setForm] = useState ({
    mail:"",
    mot_de_passe:"" 
  })
  
  const utilisateur = localStorage.getItem('Utilisateur') || null

  const navigate = useNavigate() 


  const handleOnChange = (e) => {
    setForm((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reponse = await axios.post("http://localhost:5000/Utilisateur/ajouterUtilisateur",form);
      if (reponse.data) {
        localStorage.setItem("Utilisateur",JSON.stringify(reponse.data)
        );
        console.log(reponse.data)
        toast.success('Ajouter avec succés')
        // navigate("/Accueil");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (utilisateur) navigate("/Accueil");
  }, []);

  return (
    <div>
      <div className='h-screen bg-white pt-24'>
        <div className=' mx-auto '>
          <h1 className='text-center text-6xl mb-5 font-bold'> Inscription</h1>
          {/* <img className='rounded-full ' src={image}/> */}
        </div>
        <div className='flex justify-center items-center '>
          <div className="form-control w-full max-w-xs">
            <label className="label mt-4">
              <span className="label-text">Adresse e-mail </span>
            </label> 
            <form onSubmit={handleSubmit} >
                <input type="email" value={form.mail} name='mail' onChange={handleOnChange} placeholder="Votre email" className="input input-bordered input-primary w-full max-w-xs" />
              <label className="label mt-4">
                <span className="label-text">Mot de passe  </span>
              </label>
                <input type="password" value={form.mot_de_passe} name='mot_de_passe' onChange={handleOnChange} placeholder="Votre mot de passe" className="input input-bordered input-primary w-full max-w-xs" />
              <label className="label mt-4">
                <span className="label-text"> Confirmez votre mot de passe </span>
              </label>
              {/* <input type="password" value={form.mot_de_passe} onChange={(e) => mot_de_passe(e.target.value)} placeholder="Confirmez votre mot de passe" className="input input-bordered input-primary w-full max-w-xs " /> */}
              <div className='pt-10 flex justify-center'>
                <button className='btn bg-red-900 text-white' type='submit' > Créer un compte </button>
              </div>
              <label className="label mt-5 ml-8">
                <span className="label-text"> Avez-vous un compte ? <Link to="/Connexion" className='font-bold underline' >Se connecter</Link></span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inscription