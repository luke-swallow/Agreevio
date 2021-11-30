import "../styles/Analyze.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container} from 'react-bootstrap';
import {useState} from 'react';
import {callSummarizer} from '../uploadSummarizer.js'
import {useNavigate} from 'react-router-dom'
import Summary from '../components/Summary'
import {Modal} from 'react-bootstrap'
function AnaylzeAgreement(){
  const [text, setText] = useState("");
  const[isLoading, setIsLoading] = useState(false);
  const[summarizedText, setSummarizedText] = useState([])
  const[isSummaryView, setSummaryView] = useState(false)

  if(isLoading){
    return(
      <div>
        <h1>loading</h1>
      </div>
    )
  }
  if(isSummaryView){
    return(
     
          <Summary summarizedText={summarizedText} title= "example company" back={()=> setSummaryView(false)}/>
     
    )
  }else {
    return(
      <div>
        <div class="row justify-content-center text-center mb-5">
          <div class="col-md-5">
            <h2 class="section-heading">Analyze User Agreements</h2>
          </div>
        </div>
      <Container>
        <Form.Control
          as="textarea"
          placeholder="Paste in Agreement"
          style={{ height: 100, width: 600, marginLeft: 350 }}
          value={text}
          onChange={(e)=> {setText(e.currentTarget.value)}}
        />
        <br/>
        <Button className="search-button" id="button-addon2" style={{marginLeft: 575}} 
      onClick={async()=> 
        {
          setIsLoading(true);
          const results = await callSummarizer(text);
          setSummarizedText(results)
          setSummaryView(true)
          setIsLoading(false)
        }
      }>
        Analyze
      </Button>
      </Container>
      
      <br />
      </div>
    );
  }
  
}
export default AnaylzeAgreement;
