import { InputGroup, FormControl, Button } from 'react-bootstrap';
import SearchResults from '../components/SearchResults';
import "../styles/Search.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchAgreements(){


  return(
    <section className="section">
      <div className="container">

        <div class="row justify-content-center text-center mb-5">
          <div class="col-md-5" data-aos="fade-up">
            <h2 class="section-heading">Search User Agreements</h2>
          </div>
        </div>
      </div>

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
  </section>
  );
}
export default SearchAgreements;