// External Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

// Components
import Display from "~components/Display/Display";
import Layout from "~components/Layout/Layout";

function App() {
  return (
    <Container
      className="px-4 px-lg-5 py-5 text-bg-white border rounded-3 mt-3"
      style={{ maxWidth: "500px", fontSize: "0.7rem" }}
    >
      <Display/>
      <Layout />
    </Container>
  );
}
export default App;
