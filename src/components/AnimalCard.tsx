import { AnimalDis } from '../models/data'
import './animal.scss'

interface Props {
    animal: AnimalDis;
    animalOnClick: (animal: any) => void;
}

const AnimalCard = ({animal, animalOnClick}: Props) =>{

    return(
        
        <div className='card' key={animal.animalId}>
            <div className={"booked"+animal.booked}><h3></h3></div>
                <img src={animal.img} alt="" />
                <h3>{animal.name}</h3>
                <p>Född: {animal.born}</p>
                <p>Kön: {animal.gender}</p>
                <p>Plats: {animal.location}</p>
             <button onClick={() =>animalOnClick(animal)}>Läs mer</button>
         </div>
    )
}

export default AnimalCard;