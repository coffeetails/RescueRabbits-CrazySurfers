import './search.scss';
import { AnimalDis } from '../models/data';


// TODO: Create the actual search. Duh!


interface Props {
  animals: AnimalDis[];
} 

const Search = ({animals}: Props) => {

  function doSearch(event: any) {
    console.log("le event", event.target.value);
  }

  function filterLocation(event: any) {
    console.log("filterLocation", event.target.value);
  }

  function filterAge(event: any) {
    console.log("filterAge", event.target.value);
  }

  function filterType(event: any) {
    console.log("filterType", event.target.value);
  }

  function onlyBooked(event: any) {
    console.log("onlyBooked", event.target.value);
  }
  

  function findUniqueValues(filterValue: string) {
    let returnArray: string[] = [];

    if(filterValue == "location") {
      returnArray = [...new Set(animals.map(animalData => animalData.location))];
    } else if(filterValue == "type") {
      returnArray = [...new Set(animals.map(animalData => animalData.type!))];
    }
   
    return returnArray;
  }


  return (
    <section className="search">
      <input type='text' placeholder='🔍 Sök' onChange={doSearch} />
      
      <select onChange={filterLocation} >
        <option value="">Plats</option>
        {findUniqueValues("location").map(location => (
          <option value={location.toLocaleLowerCase()}>{location}</option>
        ))}
      </select>

      <select onChange={filterAge} >
        <option value="">Ålder</option>
        <option value="zero">0-1år</option>
        <option value="one">1-2år</option>
        <option value="two">2-3år</option>
        <option value="three">3-5år</option>
        <option value="five">5-7år</option>
        <option value="seven">7-10år</option>
        <option value="ten">10+ år</option>
      </select>

      <select onChange={filterType} >
        <option value="">Djurtyp</option>
        {findUniqueValues("type").map(type => (
          <option value={type.toLocaleLowerCase()}>{type}</option>
        ))}
      </select>
      
      <label className="switchBox" onChange={onlyBooked} >
        <input type="checkbox" />
        <span className="slider">Obokade &nbsp;&nbsp;&nbsp;&nbsp; Alla</span>
      </label>
    </section>
  )
}

export default Search;