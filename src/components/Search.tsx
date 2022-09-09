import './search.scss';


const Footer = () => {

  function doSearch() {
    console.log("ohai");
  }

    return (
        <section className="search">
          <input placeholder='Sök' onChange={doSearch} />
          
          <select>
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

          <select>
            <option value="">Ålder</option>
            <option value="zero">0-1år</option>
            <option value="one">1-2år</option>
            <option value="two">2-3år</option>
            <option value="three">3-5år</option>
            <option value="five">5-7år</option>
            <option value="seven">7-10år</option>
            <option value="ten">10+ år</option>
          </select>

          <select>
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
          
          <label className="switchBox">
            <input type="checkbox" />
            <span className="slider">Alla &nbsp; Obokade</span>
          </label>

        </section>
    )
}

export default Footer;