import AnimalGrid from "../components/AnimalGrid";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import { AnimalDis } from "../models/data";
import jsonData from '../animals.json'
import { useState } from "react";
import { useNavigate } from 'react-router'



const LandingPage = () =>{
    const [animals, setAnimals] = useState<AnimalDis[]>(jsonData.animals)
    const navigate = useNavigate();
    
// TODO animal needs a type
    const animalOnClick = (animal) =>{
        

        
        
        navigate('/AnimalInfo' , {state:{animal}})
        return animal; 
        
    }

    return(
        <>
        <Header/>
        <h1>Landing Page</h1>
        <Search />
        <AnimalGrid  animals={animals} animalOnClick={animalOnClick}/>
        <Footer />
        </>
    )
}

export default LandingPage;