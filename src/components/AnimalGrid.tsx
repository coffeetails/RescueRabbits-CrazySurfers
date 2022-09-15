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
    const [searchedData, setsearchedData] = useState('')
    
    function doSearch(event: any) {
        let inputSearch = event.target.value
        let upperInputSearch = inputSearch.charAt(0).toUpperCase() + inputSearch.slice(1)
        setsearchedData(upperInputSearch)
        console.log("le event", event.target.value);
        
    }

    return(
        <>
        
        <Search animals={animals} doSearch={doSearch} />
        <section className="grid-container"> 
            
            {filteredAnimals.filter((val) => {
                if (searchedData == '') {
                    return val
                } else if(val.name.includes(searchedData) || val.location.includes(searchedData) || val.type.includes(searchedData)) {
                    return val
                }

            }).map(animal => (
                <AnimalCard key={animal.animalId} animal={animal} animalOnClick={animalOnClick}/> 
            ))} 
            
        </section>   
        </>  
    )
}

export default AnimalGrid;