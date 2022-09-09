import { AnimalDis } from '../models/data'
import AnimalCard from './AnimalCard';

interface Props {
    animals: AnimalDis[];
    animalOnClick: (animalId: number) => void;
}

const AnimalGrid = ({animals, animalOnClick}: Props) =>{

    return(  

            <section className="grid-container"> 
                {animals.map(animal => (
              
                    <AnimalCard key={animal.animalId} animal={animal} animalOnClick={animalOnClick}/>
            
                 ))};
             </section>   
    )
}

export default AnimalGrid;