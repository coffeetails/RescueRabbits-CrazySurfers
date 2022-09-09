import './App.scss'
import {Routes, Route} from 'react-router-dom';
import  LandingPage  from "./Views/LandingPage";
import  About  from "./Views/About";
import  Adoption  from "./Views/Adoption";
import AnimalInfo from './components/AnimalInfo';


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Adoption' element={<Adoption/>}/>
        <Route path='/AnimalInfo' element={<AnimalInfo/>}/>
      </Routes>
    </div>
  )
}

export default App
