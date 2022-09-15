import './search.scss';
import { AnimalDis } from '../models/data';

interface Props {
  animals: AnimalDis[];
  doSearch: (event: any) => void;
} 

function Search({animals, doSearch}: Props) {

  



  return (
    <section className="search">
      <input placeholder='Sök' onChange={doSearch} />
      
      {/* TODO: Flip so that "Alla" is default instead of "Obokade" */}
      
    </section>
  )
}

export default Search;