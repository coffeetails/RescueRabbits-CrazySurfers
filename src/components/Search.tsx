import './search.scss';
// import animals from '../animals.json';
import { AnimalDis } from '../models/data';

// TODO: Change so that values avalible in the drop down menues
//      are fetched from the animals.json file to create less
//      maintenance work in the project.
// TODO: Create the actual search. Duh!
interface Props {
  animals: AnimalDis[];
} 


function Search({animals}: Props) {
  console.log("animals", animals);
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
  
  return (
    <section className="search">
      <input placeholder='Sök' onChange={doSearch} />
      
      <select onChange={filterLocation} >
        <option value="">Plats</option>
        {animals?.map(animal => (
          <option value="{animal.location}">{animal.location}</option>
        ))}
        {/* <option value="arvika">Arvika</option>
        <option value="charlottenberg">Charlottenberg</option>
        <option value="hagfors">Hagfors</option>
        <option value="hammaro">Hammarö</option>
        <option value="karlstad">Karlstad</option>
        <option value="kristinehamn">Kristinehamn</option>
        <option value="sunne">Sunne</option>
        <option value="saffle">Säffle</option>
        <option value="torsby">Torsby</option>
        <option value="amotfors">Åmotfors</option> */}
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
        <option value="bunnies">Kaniner</option>
        <option value="guenapigs">Marsvin</option>
        <option value="hampsters">Hamstrar</option>
        <option value="cats">Katter</option>
        <option value="chincills">Chinchillor</option>
        <option value="dogs">Hundar</option>
        <option value="rats">Tamråttor</option>
        <option value="otheranimals">Övriga djur</option>
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