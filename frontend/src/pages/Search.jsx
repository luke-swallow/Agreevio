import { InputGroup, FormControl, Button } from 'react-bootstrap';
import SearchResults from '../components/SearchResults';
import "../styles/Search.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('HDOSHNNRSV', 'fe5ffe6f93cfcd34b6269a5cac5bf24f');
function SearchAgreements(){

  return(
    <div className="center">
    <InstantSearch searchClient={searchClient} indexName="Agreevio">
      <SearchBox />
      <Hits />
    </InstantSearch>
    </div>
  );

}
export default SearchAgreements;
