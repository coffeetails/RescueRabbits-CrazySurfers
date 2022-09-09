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
                    <div className="animal-stats">
                        <h4 className='dark-h4'>Kön</h4> <h4 className='light-h4'>{animal.gender}</h4>
                    </div>
                    
                </div>
                
            ))};
                    
                
            </section>
           <Footer />
        </>
    )
}

export default AnimalInfo;