import React from "react";
import { Navbar, Image, Form, InputGroup, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../../../assets/images/rencanain-logo.png";
const Header = ({ handleShow }) => {
  const iconStyle = {
    color: "#969595",
  };
  return (
    <Navbar className="header main-navbar" fixed="top" expand="lg">
      <Navbar.Brand>
        <Image src={Logo} width={220} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="ml-auto w-100 mr-3">
          <InputGroup className="w-75 ml-auto">
            <Form.Control
              style={{ borderColor: "#f8f9fa" }}
              id="search-keyword"
              placeholder="Cari Vendor "
            />
            <InputGroup.Prepend>
              <Button type="button" className="btn-light">
                <i style={iconStyle} className="fas fa-search"></i>
              </Button>
            </InputGroup.Prepend>
          </InputGroup>
        </Form>
        <Nav>
          <Nav.Link>
            <Button type="link" className="btn-light" block>
              <i style={iconStyle} className="fas fa-heart"></i>
            </Button>
          </Nav.Link>
          <Nav.Link>
            <Button type="link" className="btn-light" block>
              <i style={iconStyle} className="fas fa-shopping-cart"></i>
            </Button>
          </Nav.Link>
          <Nav.Link>
            <Button
              onClick={handleShow}
              type="link"
              className="btn-light btn-outline-secondary"
              block
            >
              Masuk
            </Button>
          </Nav.Link>
          <LinkContainer to="/register">
            <Nav.Link>
              <Button block>Daftar</Button>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
