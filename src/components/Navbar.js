import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-router-dom/NavLink';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {QuestionCircle} from 'react-bootstrap-icons';

const navStyle = {
  fontFamily: "Mont",
  fontSize: "16px",
  textDecoration: "non",
  color: "white"
}

function AppNavbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar style={{backgroundColor: "#111"}} bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          </NavLink>
          <span className="font-mont">Clipinlay</span>
        </Navbar.Brand>
        <Nav.Link>
          <NavLink style={navStyle} to="/timeline">Timeline</NavLink>
        </Nav.Link>
{/*        <QuestionCircle onClick={handleShow}></QuestionCircle> */}
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Text d'aide.
          </Offcanvas.Body>
        </Offcanvas>

      </Container>
    </Navbar>);
}

export default AppNavbar;
