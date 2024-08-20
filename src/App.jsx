// External Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import Display from './components/Display/Display';
import StyledButton, { DigitButton, PrimaryButton } from './components/Button/Button';

// Main App Component
function App() {
  const buttonLayout = [
    ['C', '√', 'x²', '+'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '/'],
    ['()', '0', '.', '=']
  ];

  return (
    <Container className="px-4 px-lg-5 py-5 text-bg-white border rounded-3 mt-3" style={{ maxWidth: '500px', fontSize: '0.7rem' }}>
      <Row className='px-2'>
        <Col xs={12} className="text-bg-light text-center p-0 rounded-3" style={{ height: '70px' }}>
          <Display />
        </Col>
      </Row>
      {buttonLayout.map((row, rowIndex) => (
        <Row className='mt-3' key={rowIndex}>
          {row.map((button, colIndex) => (
            <Col xs={3} key={colIndex}>
              {button === '=' ? (
                <PrimaryButton>=</PrimaryButton>
              ) : button === 'C' || button === '√' || button === 'x²' || button === '+' || button === '-' || button === 'x' || button === '/' || button === '()' || button === '.' ? (
                <StyledButton>{button}</StyledButton>
              ) : (
                <DigitButton>{button}</DigitButton>
              )}
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default App;
