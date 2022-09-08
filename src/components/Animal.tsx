import { useState } from "react";
import { AnimalDis } from '../models/data'
import jsonData from '../animals.json'
import './animal.scss'
const Animal = () =>{
    const [animal, setAnimal] = useState<AnimalDis[]>(jsonData.animals);
    const animalClicked = (e) => {
        animal.forEach(animal => {
            if (e.target.name !== animal.name) {
                console.log(animal);
                
            }
        })
    }
    return(
        <>
        <section className="grid-container"> 
        {animal.map(animal =>(
              
                <div className='card'>
                    <div className={"booked"+animal.booked}><h3></h3></div>
                    <img src={animal.img} alt="" />
                    <h3>{animal.name}</h3>
                    <p>Född: {animal.born}</p>
                    <p>Kön: {animal.gender}</p>
                    <p>Plats: {animal.location}</p>
                    <button onClick={(e) => animalClicked(e)}>Läs mer</button>
                </div>
            
        ))}
        </section> 
        </>
    )
}

export default Animal;