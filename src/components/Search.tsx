import './search.scss';
import { AnimalDis } from '../models/data';


// TODO: Create the actual search. Duh!
// TODO: Implement the interface/model


interface Props {
  animals: AnimalDis[];
} 

function Search({animals}: Props) {

  // event: object 
  // Property 'target' does not exist on type 'object'.ts(2339)

  // event: React.ChangeEvent<HTMLInputElement>
  // Type '(event: ChangeEvent<HTMLInputElement>) => void' is not assignable to type 'ChangeEventHandler<HTMLSelectElement>'.
  // Types of parameters 'event' and 'event' are incompatible.
  // Type 'ChangeEvent<HTMLSelectElement>' is not assignable to type 'ChangeEvent<HTMLInputElement>'.
  // Type 'HTMLSelectElement' is missing the following properties from type 'HTMLInputElement': accept, align, alt, capture, and 37 more.ts(2322)

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
      <input placeholder='Sök' onChange={doSearch} />
      
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
      
      {/* TODO: Flip so that "Alla" is default instead of "Obokade" */}
      <label className="switchBox" onChange={onlyBooked} >
        <input type="checkbox" />
        <span className="slider">Alla &nbsp; Obokade</span>
      </label>
    </section>
  )
}

export default Search;