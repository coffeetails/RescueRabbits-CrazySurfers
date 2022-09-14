import { AnimalDis } from '../models/data'
import AnimalCard from './AnimalCard';
import { useState } from "react";
import Search from './Search';

interface Props {
    animals: AnimalDis[];
    animalOnClick: (animalId: number) => void;
}

const AnimalGrid = ({animals, animalOnClick}: Props) =>{
    const [filteredAnimals, setfilteredAnimals] = useState(animals)
    function doSearch(event: any) {
        console.log("le event", event.target.value);
    }

    const filterLocation =(event: any) => {
        let currentLocation: string = event.target.value;
        console.log(event);
        console.log(animals);
        setfilteredAnimals(animals.filter(animal => animal.location == event.target.value));
        console.log(filteredAnimals);
    }
    console.log(typeof filteredAnimals);
    
    return(  
        <section className="grid-container"> 
            <Search animals={animals} doSearch={doSearch} filterLocation={filterLocation}/>
            {filteredAnimals.map(animal => (
                <AnimalCard key={animal.animalId} animal={animal} animalOnClick={animalOnClick}/> 
            ))} 
            
        </section>   
    )
}

export default AnimalGrid;