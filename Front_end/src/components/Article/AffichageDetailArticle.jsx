import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import axios from "axios"
import DetailArticle from './DetailArticle'

function AffichageDetailArticle({fetching, setFetching}) {
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
    <div className='bg-red-400'>
        {data.length && data.map(donnee => (     
        <DetailArticle key={donnee._id} fetching={fetching} setFetching={setFetching} element={donnee} /> ))}
    </div>
  )
}

export default AffichageDetailArticle