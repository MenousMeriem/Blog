import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import AffArticle from './AffArticle'

function Mesarticles({fetching, setFetching}) {
    const [data, setData] = useState([])       

    const fetchData = async() => {
        try {
            const reponse = await axios.get('http://localhost:5000/Publication/afficherPublication')
            setData(reponse.data)
        } catch (error) {
          toast.error(error.message)            
        }
    }
    useEffect(()=>{
        fetchData()
    }, [])
    
    const [input, setInput] = useState({
        titrePub:'',
        Contenu:'',
        Sujet:'',
        Image:'',
        })
        const onChange = (e) => {
            setInput((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
            }))
        }
    const postPub = async() => {
        try {
        const response =  await axios.post('http://localhost:5000/Publication/ajouterPublication', input)
            setInput('')
            if(response.data) {
                toast.success('Publication ajouté')
            }
        } catch (error) {
            toast.error(error)
        }
    }
    const onSubmit =(e) => {
        e.preventDefault()
        postPub()
        setInput({
            titrePub:'',
            Contenu:'',
            Sujet:'',
            Image:'',
        })
    }
    
  return (
    <div>
        <div>
            <h1 className='text-4xl font-bold p-10 '> Mes articles </h1>
            <div className='grid grid-cols-3 gap-3 p-5'>
                {data.length && data.map(element => (
                    <AffArticle key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
                ))}
            </div> 
        </div>

        <div>
              {/* The button to open modal */}
            <label htmlFor="my-modal" className="btn ml-96 w-72  text-white">Ajouter un article</label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={onSubmit}>
                        <div className='flex items-center justify-center '>
                            <div className='px-10 py-10 flex flex-col w-96'>
                                <span className="text-base py-2"> Ajouter un titre  </span>
                                <input type="text" placeholder=" Le titre" name='titrePub' value={input.titrePub} onChange={onChange} required className="input input-bordered input-primary w-full max-w-xs" />
                                <span className="text-base py-2"> Ajouter un contenu  </span>
                                <input type="text" placeholder=" Le contenu" name='Contenu' value={input.Contenu} onChange={onChange} className="input input-bordered input-primary w-full max-w-xs" />
                                <span className="text-base py-2"> Ajouter une catégorie  </span>
                                <input type="text" placeholder=" La catégorie" name='Sujet' value={input.Sujet} onChange={onChange} className="input input-bordered input-primary w-full max-w-xs" />
                                {/* <span className="text-base py-2"> Ajouter une image  </span> */}
                                {/* <input type="file" placeholder="Image" name='Image' value={input.Image} onChange={onChange} className="input input-bordered input-primary w-full max-w-xs" /> */}
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-center '> 
                            <button className="btn btn-primary mr-3 text-white" type='submit'>Ajouter</button>
                            <div className="">
                                <label htmlFor="my-modal" className="btn text-white">Annuler</label>
                            </div>
                            {/* <button className="btn btn-primary mr-3">Modifier</button>
                            <button className="btn btn-primary">Supprimer</button>  */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mesarticles