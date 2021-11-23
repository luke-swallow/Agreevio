import { InputGroup, FormControl } from 'react-bootstrap';
import SearchResults from '../components/SearchResults';

function SearchAgreements(){
  return(
  <div>
    <InputGroup className="mb-3">
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