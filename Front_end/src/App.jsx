import Accueil from "./Pages/Accueil";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import Categorie from "./Pages/Categorie";
import Propos from "./Pages/Propos";
import Layout from "./components/Layout/Layout";
import DetailArticle from "./components/Article/DetailArticle";
import Profil from "./components/Profil/Profil";
import Page1 from "./components/PremierePage/Page1";
import Moncompte from "./components/Profil/Moncompte";
import Mesarticles from "./components/Profil/Mesarticles";
import PageDetailArticle from "./Pages/PageDetailArticle";
import 'react-toastify/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import { Navigate } from "react-router-dom";

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider,
} from "react-router-dom";

    
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>          
          <Route index element={<Navigate to={"/Page"}/>}/>
          <Route path="/Accueil" element={<Accueil/>}/>
          <Route path="/Categorie" element={<Categorie/>}/> 
          <Route path="/Propos" element={<Propos/>}/> 
          <Route path="/Inscription" element={<Inscription/>}/> 
          <Route path="/Connexion" element={<Connexion/>}/> 
          <Route path="/DetailArticle" element={<DetailArticle/>}/>  
          <Route path="/PageDetailArticle" element={<PageDetailArticle/>}/> 
          {/* <Route path="/PageDetailProfil" element={<PageDetailProfil/>} /> */}
          <Route path="/Profil" element={<Profil/>}>
            <Route path="/Profil/Profil" element={<Moncompte/>}/>
            <Route path="/Profil/Article" element={<Mesarticles/>}/>  
          </Route>
          <Route path="/Page" element={<Page1/>}/>      
          <Route path="/*" element={<Navigate to={'/Page'}/>}/>   
        </Route >     
  ));


  function App() {
    return (
      <div className=''>
        <ToastContainer/>
        <RouterProvider router={router}/>
      </div>
      
    );
  }

export default App
