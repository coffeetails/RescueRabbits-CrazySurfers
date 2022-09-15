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
        // if(event.target.value == "") {
            setfilteredAnimals(animals);
        // } else {
        //     setfilteredAnimals(animals.filter(animal => {
        //         let animalBday = new Date(animal.born);
        //         let today = new Date();

        //         console.log("animal.born", animal.born);
        //         console.log("substrings", animal.born.substring(0,4), animal.born.substring(5,7), animal.born.substring(8,10));
        //         console.log("animalBday", animalBday);
        //         // console.log("today", today);
        //         // console.log("today.getFullYear() - animalBday.getFullYear()", today.getFullYear() - animalBday.getFullYear());
        //         // return animal.born == event.target.value;
        //     }));
        // }
    }

    const onlyBooked =(event: any) => {
        console.log("==================",event);
        console.log(event.target.checked);
        console.log(animals);
        if(event.target.checked == false) {
            setfilteredAnimals(animals);
        } else {
            setfilteredAnimals(animals.filter(animal => animal.booked == false));
        }
        console.log(filteredAnimals);
    }

    
    return(  
        <section className="grid-container"> 
            <Search animals={animals} doSearch={doSearch} filterLocation={filterLocation} filterType={filterType} filterAge={filterAge} onlyBooked={onlyBooked} />
            {filteredAnimals.map(animal => (
                <AnimalCard key={animal.animalId} animal={animal} animalOnClick={animalOnClick}/> 
            ))} 
            
        </section>   
    )
}

export default AnimalGrid;