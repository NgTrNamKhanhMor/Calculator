// External Libraries
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import { buttonLayout, buttonMapping } from "../../const/buttonStyleMapping";
import { DigitButton } from "../Button/Button";

export default function Layout() {
  return (
    <div>
      {buttonLayout.map((row, rowIndex) => (
        <Row className='mt-3' key={rowIndex}>
          {row.map((button, colIndex) => {
            const ButtonComponent = buttonMapping[button] || DigitButton;
            return (
              <Col xs={3} key={colIndex}>
                <ButtonComponent>{button}</ButtonComponent>
              </Col>
            );
          })}
        </Row>
      ))}
    </div>
  )
}
