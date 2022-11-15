import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";

function Navigation() {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/butterflies.png"
          width="60"
          height="60"
          className="pl-5 flex d-inline-block align-top hover:scale-110"
        />
      </Navbar.Brand>
      <Navbar.Collapse className="flex md:justify-end justify-center items-center">
        <Nav className="font-lexend items-center text-black">
          <Nav.Link href="#about" className="!text-xl p-3">
            about me
          </Nav.Link>
          <Nav.Link href="#exp" className="!text-xl p-3">
            experience
          </Nav.Link>
          <Nav.Link href="#skills" className="!text-xl p-3">
            skills
          </Nav.Link>
          <Nav.Link href="#projects" className="!text-xl p-3 mr-1">
            projects
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
