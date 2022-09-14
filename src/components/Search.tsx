import './search.scss';
import { AnimalDis } from '../models/data';

interface Props {
  animals: AnimalDis[];
  doSearch: (event: any) => void;
  filterLocation: (event: any) => void;
  filterType: (event: any) => void;
  filterAge: (event: any) => void;
} 

function Search({animals, doSearch, filterLocation, filterType, filterAge}: Props) {

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
      <input placeholder='Sök' onChange={doSearch} />
      
      <select onChange={filterLocation} >
        <option value="">Plats</option>
        {findUniqueValues("location").map(location => (
          <option value={location}>{location}</option>
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
      
      {/* TODO: Flip so that "Alla" is default instead of "Obokade" */}
      <label className="switchBox" onChange={onlyBooked} >
        <input type="checkbox" />
        <span className="slider">Alla &nbsp; Obokade</span>
      </label>
    </section>
  )
}

export default Search;