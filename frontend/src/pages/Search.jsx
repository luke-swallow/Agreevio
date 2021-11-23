import { InputGroup, FormControl } from 'react-bootstrap';
import SearchResults from '../components/SearchResults';
import "../styles/Search.css";

function SearchAgreements(){

  /**
   * I need to center this. Centering is something that
   * should be common in oother elements as well.
   * I don't want to import another css file since there 
   * will be repetive import statement. How do I do this?
   */

  return(
  <div className="center">
    <InputGroup className="search-bar">
      <FormControl
        placeholder="Company Name"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
    </InputGroup>
    <SearchResults />

  </div>
  );
}
export default SearchAgreements;