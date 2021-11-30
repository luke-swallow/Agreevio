import { Accordion,Card } from 'react-bootstrap';

function SearchResult(props) {
  
  const circleStyle = {
    marginLeft:10,
    marginTop: 5,
    display:"inline-block",
    backgroundColor: "blue",
    borderRadius: "50%",
    width:15,
    height:15,
  };
  
  const circle = <div style={circleStyle}></div>
  
  
  return (
    <div className="search-results">
    <Card onClick={()=>(alert('hello'))} >
    <Card.Body >
      <h4>{props.hit.title}</h4>
    </Card.Body>
    </Card>
    </div>
  )
}

export default SearchResult;