import './animalinfo.scss'
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const AnimalInfo = () =>{
    const { state } = useLocation();
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
                <div className="animal-card" key={animal.animalId}>
                    <div className="animal-img">
                        <h2>{animal.name}</h2>
                        <img src={animal.img} alt="" />
                    </div>
                    <div className="animal-desc">
                        <h3>OM</h3>
                        <p>{animal.description}</p>
                    </div>
                    <table className="animal-stats">
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

                    </table>
                    
                </div>
                
            ))};
                    
                
            </section>
           <Footer />
        </>
    )
}

export default AnimalInfo;