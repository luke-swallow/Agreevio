import { Accordion } from 'react-bootstrap';

function SearchResults() {

  
  const circleStyle = {
    marginLeft:10,
    marginTop: 5,
    display:"inline-block",
    backgroundColor: "red",
    borderRadius: "50%",
    width:15,
    height:15,
  };
  
  const circle = <div style={circleStyle}></div>
  
  
  return (
    <div className="search-results">
    <Accordion >
    <Accordion.Item eventKey="1">
      <Accordion.Header>Company - Title{circle}{circle}{circle}</Accordion.Header>
      <Accordion.Body>
        {circle} Topic 1 <br/>
        {circle} Topic 2 <br/>
        {circle} Topic 3 <br/>
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default SearchResults;