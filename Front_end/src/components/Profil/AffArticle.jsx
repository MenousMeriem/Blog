import React, {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function AffArticle ({fetching, setFetching, element}) {

    const [modifier, setModifier] = useState(false)
    const [titreValue, setTitreValue] = useState(element.titrePub)
    const [contenuValue, setContenuValue] = useState(element.Contenu)


    const handleUpdate = async () => {  
        try {
            await axios.put('http://localhost:5000/Publication/modifierPublication/'+element._id, 
            {titrePub :titreValue , Contenu: contenuValue })
            window.location.reload()
            toast.success('Publication modifier')
        } catch (error) {
            toast.error(error.message)
        }
    }
    
    const onDelete = async () => {
        const confirmation = confirm('Etes vous sur de supprimer cette carte ?')
        if(!confirmation) return
        try {
            await axios.delete('http://localhost:5000/Publication/supprimerPublication/'+element._id)
            window.location.reload()
            toast.success('Article supprimé')
      } catch (error) {
            toast.error(error.message)    
      } finally {
        setFetching(!fetching)
       }
    }

  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img/></figure>
            <div className="card-body">
                {modifier ? <input className='w-full text-sm bg-secondary border border-base-content rounded-md text-base-content px-2' value={titreValue} onChange={e => setTitreValue(e.target.value)} /> : <h2 className="card-title">{element.titrePub}</h2>}
                {modifier ? <input className='w-full text-sm bg-secondary border border-base-content rounded-md text-base-content px-2' value={contenuValue} onChange={e => setContenuValue(e.target.value)} /> : <p> {element.Contenu} </p>}
                <div className="card-actions justify-end">
                    {modifier ? <button className="btn btn-primary text-white" onClick={handleUpdate}> Confirmer </button> : <button className="btn btn-primary text-white" onClick={e=> setModifier(true)}> Modifier </button>}
                    {modifier ? <button className="btn btn-primary text-white" onClick={e => setModifier(false)}>Annuler</button> : <button className="btn btn-primary text-white" onClick={onDelete}> Supprimer </button>}                
                </div>
            </div>
        </div>     
    </div>
  )
}

export default AffArticle