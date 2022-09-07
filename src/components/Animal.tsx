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
                    <div className={"bokad"+animal.booked}><h3>{}</h3></div>
                    <img src={animal.img} alt="" />
                    <h3>Namn: {animal.name}</h3>
                    <h5>Född: {animal.born}</h5>
                    <h5>Kön: {animal.gender}</h5>
                    <h5>Plats: {animal.location}</h5>
                    <button>läs mer</button>
                </div>
            
        ))}
        </section> 
        </>
    )
}

export default Animal;