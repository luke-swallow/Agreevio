import "../styles/Analyze.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AnaylzeAgreement(){
  return(
    <div>
      <div class="row justify-content-center text-center mb-5">
        <div class="col-md-5" data-aos="fade-up">
          <h2 class="section-heading">Analyze User Agreements</h2>
        </div>
      </div>
      
    <Form.Control
      as="textarea"
      placeholder="Paste in Agreement"
      style={{ height: 100, width: 600, marginLeft: 350 }}
    />
    <br />
    <Button className="search-button" id="button-addon2" style={{marginLeft: 575}}>
      Analyze
    </Button>
    
    </div>
  );
}
export default AnaylzeAgreement;