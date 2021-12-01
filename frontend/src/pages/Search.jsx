import { InputGroup, FormControl, Container, Row, Col} from 'react-bootstrap';
import SearchResult from '../components/SearchResult';
import "../styles/Search.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import algoliasearch from 'algoliasearch';
import { InstantSearch, Hits, connectSearchBox } from 'react-instantsearch-dom';
import {useState} from 'react'
import Summary from '../components/Summary'

const searchClient = algoliasearch('HDOSHNNRSV', 'fe5ffe6f93cfcd34b6269a5cac5bf24f');
function SearchAgreements(){
  const[isSummaryView, setSummaryView] = useState(false)
  const[summarizedText, setSummarizedText]= useState([])
  if(isSummaryView){
    return(
      <Summary summarizedText={summarizedText} title= "example company" back={()=> setSummaryView(false)} />
    )
  } else{

  return(
    <InstantSearch searchClient={searchClient} indexName="Agreevio" >
      <div class="row justify-content-center text-center mb-5">
          <div class="col-md-5">
            <h2 class="section-heading">Search User Agreements</h2>
          </div>
        </div>
      <Container >
        <Row className="justify-content-center">
          <Col md={6}>
          <CustomSearchBox />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
          <Hits hitComponent={({hit}) => <SearchResult title={hit.title} displaySummary={()=>setSummaryView(true)} setText= {()=>setSummarizedText(hit.summarizedText)} />} />
          </Col>
        </Row>
      
      </Container>
    </InstantSearch>
    
  );
  }

}
export default SearchAgreements;

const SearchBox = ({currentRefinement, refine}) => (
  <InputGroup className="search-bar">
      <FormControl
        placeholder="Company Name"
        aria-describedby="basic-addon2"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
    </InputGroup>
);

const CustomSearchBox = connectSearchBox(SearchBox);
