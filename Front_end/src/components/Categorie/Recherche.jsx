import React from 'react'

function Recherche() {
  return (
    <div>
      <h1 className='text-center text-5xl font-bold p-20'> Faites vos recherches d'articles <br /> par catégorie </h1>
      <div className="form-control">
        <input type="text" placeholder="Recherche" className="input input-bordered border-rose-900 max-w-6xl ml-40 mb-48" />
      </div>
    </div>
  )
}

export default Recherche