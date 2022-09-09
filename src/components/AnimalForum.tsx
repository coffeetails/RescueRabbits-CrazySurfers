import './animalforum.scss'
import  { useState } from 'react';
import {  Routes, Route, useNavigate, Navigate } from 'react-router'
import Footer from './Footer';



const AnimalForum = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(fullName);
        console.log(phone);
        console.log(event);
        
        console.log('tack för din ansökan' + {setFullName});
        
        //navigate('/')
        return <Footer />
    }
    return(

        <section className="forum-container">
            <form onSubmit={submitForm}>
                <h1>Intresseanmälan</h1>
                <label htmlFor="fullName">För och efternamn</label>
                <input type="text" id='fullName'   value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                <label htmlFor="phone">Telefonnummer</label>
                <input type="text" id='phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label htmlFor="email">E-post</label>
                <input type="text" id='email' name='email' />
                <label htmlFor="currentAnimalInfo">Nuvarande djur i hemmet</label>
                <textarea name="" id="currentAnimalInfo" cols={30} rows={15} ></textarea>
                <label htmlFor="currentHomeInfo">Hem och familjesituation</label>
                <textarea name="" id="currentHomeInfo" cols={30} rows={15}></textarea>
                <button className='submit-btn'>Ansök</button>
            </form>
        </section>
    )
}

export default AnimalForum;