import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Display from './components/Display/Display';
import { StyledButtonItem } from './components/Button/Button.style';

function App() {
  return (
      <Container className="px-4 px-lg-5 py-5 text-bg-secondary my-4 mx-auto rounded-3">
        <Row className='px-2'>
          <Col xs={12} className="text-bg-light text-center p-0 rounded-3" style={{height: '50px'}}>
            <Display />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col sx={3}>
            <StyledButtonItem>C</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>&radic;</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>x<sup>2</sup></StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>+</StyledButtonItem>
          </Col>
        </Row>
        <Row>
          <Col sx={3}>
            <StyledButtonItem>7</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>8</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>9</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>-</StyledButtonItem>
          </Col>
        </Row>
        <Row>
          <Col sx={3}>
            <StyledButtonItem>4</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>5</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>6</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>x</StyledButtonItem>
          </Col>
        </Row>
        <Row>
          <Col sx={3}>
            <StyledButtonItem>1</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>2</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>3</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>/</StyledButtonItem>
          </Col>
        </Row>
        <Row>
          <Col sx={3}>
            <StyledButtonItem>()</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>0</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>.</StyledButtonItem>
          </Col>
          <Col sx={3}>
            <StyledButtonItem>=</StyledButtonItem>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
