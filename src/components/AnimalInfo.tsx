import './animalinfo.scss'
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import AnimalForum from './AnimalForum';


const AnimalInfo = () =>{

    //to give state a proper type so it doesnt show error
    type LocationProps = {
        state: {
          animal: Location;
        };
      };
    const { state } = useLocation() as LocationProps;

    const animal = state.animal;

    let animalArray: any[] = [];
    
    animalArray.push(animal);
    
    animalArray.map(animal =>{

        if (animal.booked == true) {
            animal.booked = 'Ja'
        }
        
        if (animal.booked == false) {
            animal.booked = 'Nej'  
        }  
    })

    
    return(
        <>
           <Header />
            <section className="animal-info">
            {animalArray.map(animal => ( 
                <section className="animal-card" key={animal.animalId}>
                    <div className="animal-img">
                        <h2>{animal.name}</h2>
                        <img src={animal.img} alt="" />
                    </div>
                    <div className="animal-desc">
                        <h3>OM</h3>
                        <p>{animal.description}</p>
                    </div>
                    <table className="animal-stats">
                        <tbody>
                        <tr>
                            <td>Kön</td>
                            <td className='stats-value'>{animal.gender}</td>
                        </tr>
                        <tr>
                            <td>Ålder</td>
                            <td className='stats-value'>{animal.born}</td>
                        </tr>
                        <tr>
                            <td>Plats</td>
                            <td className='stats-value'>{animal.location}</td>
                        </tr>
                        <tr>
                            <td>Typ</td>
                            <td className='stats-value'>{animal.type}</td>
                        </tr>
                        <tr>
                            <td>Bokad</td>
                            <td className='stats-value'>{animal.booked}</td>
                        </tr>
                    </tbody>
                    </table>
                    
                </section>  
            ))};
                    
                <div className='arrow'>
                    <div className='arrow-shape'></div>
                </div>
                <AnimalForum  />
            </section>
           <Footer />
        </>
    )
}

export default AnimalInfo;