import AnimalGrid from "../components/AnimalGrid";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import { AnimalDis } from "../models/data";
import jsonData from '../animals.json'
import { useState } from "react";
import { useNavigate } from 'react-router'
import "./landingPage.scss";



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
            <section className="textWrapper">
                <h1>Rescue Rabbits</h1>
                <p>Tack för att du har hittat hit! Rescue Rabbits råder alla som har möjlighet att utöka sin familj med ett djur att vända sig till ett djurhem och ge ett hemlöst djur ett tryggt liv. Att adoptera ett djur förändrar inte hela världen. Men det kan förändra någons hela värld.</p>
            </section>
            <section className="landingPageWrapper">
                <AnimalGrid  animals={animals} animalOnClick={animalOnClick}/>
            </section>
            <Footer />
        </>
    )
}

export default LandingPage;