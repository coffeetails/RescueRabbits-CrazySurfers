import './App.scss'
import {Routes, Route} from 'react-router-dom';
import  LandingPage  from "./Views/LandingPage";
import  About  from "./Views/About";
import  Adoption  from "./Views/Adoption";
function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Adoption' element={<Adoption/>}/>
      </Routes>
    </div>
  )
}

export default App
