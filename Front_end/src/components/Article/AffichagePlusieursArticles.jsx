
import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import PlusieursArticles from './PlusieursArticles'

function AffichagePlusieursArticles({fetching, setFetching}) {
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
  return (
    <div>
        <h1 className='text-4xl ml-10 pt-10 ' > Articles </h1>
        
            <div className='py-10 px-20 grid grid-cols-3 gap-5'>
                {data.length && data.map(element => (
                    <PlusieursArticles key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
                ))}
            </div>      
    </div>
  )
}

export default AffichagePlusieursArticles