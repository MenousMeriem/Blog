
import image from '../../assets/image1.jpg'
import React from 'react'

function DetailArticle(element) {
  return (
    <div>
      <div className='flex justify-center'>
        {/* <img className='max-w-fit h-fit mt-10' src= {image}/> */}
      </div>
      <div className='p-10'>
        <h3 className='text-4xl'> {element.titrePub}</h3>
        <p className='text-2xl'> {element.Contenu} </p>
      </div>
    </div>
  )
}

export default DetailArticle