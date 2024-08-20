// External Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Display() {
    
  return (
    <>
      <Row className='px-2'>
        <Col xs={12} className="text-bg-light text-center p-0 rounded-3" style={{ height: '70px' }}>
            <Container className='display h-100 text-center p-2 border border-2 rounded-2 bg-white'/>
          </Col>
      </Row>
    </>
  )
}
