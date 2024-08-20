// External Libraries
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//Redux
import { useSelector } from "react-redux";

export default function Display() {
  const currentInput = useSelector((state) => state.calculator.currentInput);
  return (
    <>
      <Row className="px-2">
        <Col
          xs={12}
          className="text-bg-light text-center p-0 rounded-3"
          style={{ height: "70px" }}
        >
          <Container className="display-6 h-100 text-end p-2 border border-2 rounded-2 bg-white">
            {currentInput}
          </Container>
        </Col>
      </Row>
    </>
  );
}
