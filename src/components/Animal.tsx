import { useState } from "react";
import { AnimalDis } from '../models/data'
import jsonData from '../animals.json'
import './animal.scss'
const Animal = () =>{
    const [animal, setAnimal] = useState<AnimalDis[]>(jsonData.animals);
    return(
        <>
        {animal.map(animal =>(
             <section className="grid-container">  
                <div className='card'>
                    <img src={animal.imgUrl} alt="" />
                    <h3>{animal.name}</h3>
                    <h4>{animal.arrival}</h4>
                    <h5>{animal.born}</h5>
                    <h5>{animal.gender}</h5>
                    <h5>{animal.location}</h5>
                    <button>läs mer</button>
                </div>
            </section> 
        ))}
        </>
    )
}

export default Animal;