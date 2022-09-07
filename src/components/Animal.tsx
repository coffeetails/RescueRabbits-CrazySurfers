import { useState } from "react";
import { AnimalDis } from '../models/data'
import jsonData from '../animals.json'
import './animal.scss'
const Animal = () =>{
    const [animal, setAnimal] = useState<AnimalDis[]>(jsonData.animals);
    return(
        <>
        <section className="grid-container"> 
        {animal.map(animal =>(
              
                <div className='card'>
                    <img src={animal.img} alt="" />
                    <h3>{animal.name}</h3>
                    <h4>{animal.arrival}</h4>
                    <h5>{animal.born}</h5>
                    <h5>{animal.gender}</h5>
                    <h5>{animal.location}</h5>
                    <button>läs mer</button>
                </div>
            
        ))}
        </section> 
        </>
    )
}

export default Animal;