// External Libraries
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Redux
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export default function Display() {
  const currentInput = useSelector((state) => state.calculator.currentInput);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [currentInput]);

  return (
    <>
      <Row className="px-2">
        <Col
          xs={12}
          className="text-bg-light text-center p-0 rounded-3"
          style={{ height: "70px" }}
        >
          <Container
            className="display-6 text-end p-2 h-100 border border-2 rounded-2 bg-white overflow-x-auto"
            style={{
              whiteSpace: "nowrap",
              scrollbarWidth: "thin", 
              scrollbarColor: "rgb(241, 243, 244) transparent", 
            }}
            ref={containerRef}
          >
            <div style={{ display: "inline-block", minWidth: "100%" }}>
              {currentInput}
            </div>
          </Container>
        </Col>
      </Row>
    </>
  );
}
