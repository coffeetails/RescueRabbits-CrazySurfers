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
        console.log("search event", event.target.value);
    }
    console.log("animals onload", filteredAnimals);

    const filterLocation =(event: any) => {
        console.log(event);
        console.log(animals);
        if(event.target.value == "") {
            setfilteredAnimals(animals);
        } else {
            setfilteredAnimals(animals.filter(animal => animal.location?.toLocaleLowerCase() == event.target.value?.toLocaleLowerCase()));
        }
        console.log(filteredAnimals);
    }

    const filterType =(event: any) => {
        console.log(event);
        console.log(animals);
        if(event.target.value == "") {
            setfilteredAnimals(animals);
        } else {
            setfilteredAnimals(animals.filter(animal => animal.type?.toLocaleLowerCase() == event.target.value?.toLocaleLowerCase()));
        }
        console.log(filteredAnimals);
    }

    const filterAge =(event: any) => {
        console.log(event.target.value);
        console.log(animals);
        if(event.target.value == "") {
            setfilteredAnimals(animals);
        } else {
            setfilteredAnimals(animals.filter(animal => {
                return animal.born == event.target.value;
            }));
        }
    }
    
    return(  
        <section className="grid-container"> 
            <Search animals={animals} doSearch={doSearch} filterLocation={filterLocation} filterAge={filterAge}/>
            {filteredAnimals.map(animal => (
                <AnimalCard key={animal.animalId} animal={animal} animalOnClick={animalOnClick}/> 
            ))} 
            
        </section>   
    )
}

export default AnimalGrid;