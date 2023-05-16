import React from 'react'
import { Link } from 'react-router-dom'

function PlusieursArticles({element}) {
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img/></figure>
            <div className="card-body">
                <h2 className="card-title">{element.titrePub}</h2>
                <p> {element.Contenu} </p>
                <div className="card-actions justify-end">
                    <Link to={'/DetailArticle'}>
                        <button className="btn btn-primary text-white"> Voir l'article</button>
                    </Link>                    
                </div>
            </div>
        </div>     
    </div>
  )
}

export default PlusieursArticles