import { AnimalDis } from '../models/data'
import AnimalCard from './AnimalCard';
import { useState } from "react";
import Search from './Search';

interface Props {
    animals: AnimalDis[];
    animalOnClick: (animalId: number) => void;
}

const AnimalGrid = ({animals, animalOnClick}: Props) =>{
    const [filteredAnimals, setfilteredAnimals] = useState({})
    function doSearch(event: any) {
        console.log("le event", event.target.value);
    }
 
    const filterLocation =(event: any) => {
        let currentLocation: string = event.target.value;
        
        console.log('searched Location: ' + currentLocation);
        animals.forEach(animal => {
            
            if (animal.location == currentLocation) {
                
                console.log(animal); 
                
                return setfilteredAnimals(animal)
          
            }
   
        })
       
    }
    
    return(  
        <section className="grid-container"> 
            <Search animals={animals} doSearch={doSearch} filterLocation={filterLocation}/>
            {animals.map(animal => (
              
                <AnimalCard key={animal.animalId} animal={animal} animalOnClick={animalOnClick}/> 
                
            ))} 
            
        </section>   
    )
}

export default AnimalGrid;