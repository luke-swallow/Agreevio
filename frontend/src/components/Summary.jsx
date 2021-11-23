import { Accordion } from 'react-bootstrap';

function Summary() {

  return (
    <div className="summary">
    <Accordion flush >
      <Accordion.Item eventKey="1">
        <Accordion.Header >Topic 1</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Summary 1</li>
            <li>Summary 2</li>
            <li>Summary 3</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Summary;