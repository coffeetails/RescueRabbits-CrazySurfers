import AnimalGrid from "../components/AnimalGrid";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AnimalDis } from "../models/data";
import jsonData from '../animals.json'
import { useState } from "react";
import { useNavigate } from 'react-router'



const LandingPage = () =>{
    const [animals, setAnimals] = useState<AnimalDis[]>(jsonData.animals)
    const navigate = useNavigate();
    

    const animalOnClick = (animal: any ) =>{
        

        
        
        navigate('/AnimalInfo' , {state:{animal}})
        return animal; 
        
    }

    return(
        <>
        <Header/>
        <h1>Landing Page</h1>
        <AnimalGrid  animals={animals} animalOnClick={animalOnClick}/>
        <Footer />
        </>
    )
}

export default LandingPage;