import { InputGroup, FormControl, Button } from 'react-bootstrap';
import SearchResults from '../components/SearchResults';
import "../styles/Search.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchAgreements(){


  return(
  <div className="center">
    <InputGroup className="search-bar">
      <FormControl
        placeholder="Company Name"
        aria-describedby="basic-addon2"
      />
      <Button className="search-button" id="button-addon2">
      Button
    </Button>
    </InputGroup>
    <SearchResults />

  </div>
  );
}
export default SearchAgreements;