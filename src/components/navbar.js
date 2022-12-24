import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = ({ setShow, size }) => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-3 bg-body rounded">
      <Container>
        <Navbar.Brand href="#home" onClick={() => setShow(true)}>
          E-Ka<span className="col-prim">ntin</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Mobile App</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="akun">
              <i className="bi bi-person icon-user col-prim"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-bag-fill fs-5 col-prim pos-rel fw-normal" onClick={() => setShow(false)}>
                <span className="col-sec icon-sambung fw-normal">{size}</span>
              </i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
