import './animalforum.scss'
import  { useState } from 'react';
import { useNavigate } from 'react-router'
import Footer from './Footer';
import Modal from './Modal';



const AnimalForum = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [openModal, setOpenModal] = useState(false)
    let infoArray: any[] = [];
    
    
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        infoArray.push(fullName);
        console.log(infoArray);
        {setOpenModal(true)}
    }
    return(

        <section className="forum-container">
            <form onSubmit={submitForm}>
                <h1>Intresseanmälan</h1>
                <label htmlFor="fullName">För och efternamn *</label>
                <input type="text" id='fullName'   value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
                <label htmlFor="phone">Telefonnummer *</label>
                <input type="text" id='phone' name='phone' required maxLength={10} minLength={10}/>
                <label htmlFor="email">E-post *</label>
                <input type="email" id='email' name='email' required  placeholder='exempel@hotmail.com'/>
                <label htmlFor="currentAnimalInfo">Nuvarande djur i hemmet</label>
                <textarea name="" id="currentAnimalInfo" cols={30} rows={15} ></textarea>
                <label htmlFor="currentHomeInfo">Hem och familjesituation</label>
                <textarea name="" id="currentHomeInfo" cols={30} rows={15}></textarea>
                <button className='submit-btn'>Ansök</button>
            </form>
            {openModal && <Modal username={fullName} closeModal={setOpenModal}/>}
        </section>
    )
}

export default AnimalForum;