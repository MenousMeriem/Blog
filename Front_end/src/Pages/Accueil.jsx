import React from 'react'
import Hero from '../components/Hero/Hero'
import Mail from '../components/Mail/Mail'
import AffichagePlusieursArticles from '../components/Article/AffichagePlusieursArticles'


function Accueil() {
  return (
    <div>
        <Hero/>
        <AffichagePlusieursArticles/>
        <Mail/>
    </div>
  )
}

export default Accueil