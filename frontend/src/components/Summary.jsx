import {useState} from 'react';
import { Button, Card, ToggleButton, ButtonGroup, Stack, Container, Row, Col} from 'react-bootstrap';
import FormRange from 'react-bootstrap/esm/FormRange';



function Summary(props) {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Key Sentences', value: '0' },
    { name: 'Paragraph', value: '1' },
  ];
  const [rangeValue, setRangeValue] = useState(1);

  const summarizedTextList = props.summarizedText.map((clause) =>
  <li>{clause}</li>
);

  return (
    
      <Container >
        <Row>
          <Col className="text-center">
            <h1> Company Title here </h1>
          </Col>
        </Row>
        <Row>
        <Card className="justify-content-center">
            <Card.Header> 
              <Container>
                <Row>
                <Col>
                  <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    className= "btn-outline-blue"
                    variant= "info"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
                </Col>
                <Col>
            <Stack direction='horizontal' gap={4}>
              <h3>Summary Length</h3>
              <h4>Short</h4>
            <FormRange min= "0" max = "25"value={rangeValue} onChange= {(e) => setRangeValue(e.currentTarget.value)}/>
            <h4>Long</h4>
            
            </Stack>
            </Col>
                </Row>

              </Container>
            
            
            </Card.Header>
            <Card.Body>
              <Container>
                <ul>
                {summarizedTextList}
              </ul>
              </Container>

            </Card.Body>
        </Card>
        </Row>
        <Button onClick={()=>props.back()}>Back</Button>
      </Container>
      
    
  )
}

export default Summary;