import './search.scss';

// TODO: Change so that values avalible in the drop down menues
//      are fetched from the animals.json file to create less
//      maintenance work in the project.
// TODO: Create the actual search. Duh!

const Footer = () => {

  function doSearch(event:  React.ChangeEvent<HTMLInputElement>) {
    console.log("le event", event.target.value);
  }

  function filterLocation(event:  object) {
    console.log("filterLocation", event.target.value);
  }

  function filterAge(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("filterAge", event.target.value);
  }

  function filterType(event:  React.ChangeEvent<HTMLInputElement>) {
    console.log("filterType", event.target.value);
  }

  function onlyBooked(event:  React.ChangeEvent<HTMLInputElement>) {
    console.log("onlyBooked", event.target.value);
  }

  return (
    <section className="search">
      <input placeholder='Sök' onChange={doSearch} />
      
      <select onChange={filterLocation} >
        <option value="">Plats</option>
        <option value="arvika">Arvika</option>
        <option value="charlottenberg">Charlottenberg</option>
        <option value="hagfors">Hagfors</option>
        <option value="hammaro">Hammarö</option>
        <option value="karlstad">Karlstad</option>
        <option value="kristinehamn">Kristinehamn</option>
        <option value="sunne">Sunne</option>
        <option value="saffle">Säffle</option>
        <option value="torsby">Torsby</option>
        <option value="amotfors">Åmotfors</option>
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

export default Footer;