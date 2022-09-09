import AnimalGrid from "../components/AnimalGrid";
import Footer from "../components/Footer";
import Header from "../components/Header";
<<<<<<< HEAD
import Search from "../components/Search";


const LandingPage = () => {
    return(
        <>
            <Header/>
            <h1>Landing Page</h1>
            <Search />
            <Animal />
            <Footer />
=======
import { AnimalDis } from "../models/data";
import jsonData from '../animals.json'
import { useState } from "react";
import { useNavigate } from 'react-router'



const LandingPage = () =>{
    const [animals, setAnimals] = useState<AnimalDis[]>(jsonData.animals)
    const navigate = useNavigate();
    

    const animalOnClick = (animal) =>{
        

        
        
        navigate('/AnimalInfo' , {state:{animal}})
        return animal; 
        
    }

    return(
        <>
        <Header/>
        <h1>Landing Page</h1>
        <AnimalGrid  animals={animals} animalOnClick={animalOnClick}/>
        <Footer />
>>>>>>> 6da37efe28aacd1b7475e39f53fd7f2d948659ef
        </>
    )
}

export default LandingPage;