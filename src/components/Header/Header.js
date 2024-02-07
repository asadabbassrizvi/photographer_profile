import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img from "../images/damien.png";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import "./header.scss";

export default function Header() {
  useEffect(() => {
    gsap.to(".logo", {
      duration: 0.5,
      x: 2,
      rotation: 360,
    });
  }, []);

  useEffect(() => {});

  return (
    <div className="row w-100 bottomline m-0">
      <div className="col-lg-12 p-0">
        <div className="mainHeader">
          <div className="header">
            <div className="logoContainer">
              <img src={img} alt="logo" className="logo" />
            </div>
            <div className="navbarContainer p-0">
              <Navbar expand="lg" className="bg-transparent p-0">
                <Container fluid className="p-0">
                  <Navbar.Toggle aria-controls="navbarScroll">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z"
                        fill="white"
                      />
                    </svg>
                  </Navbar.Toggle>
                  <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                      <NavLink className="text-white" to="/home">
                        Home
                      </NavLink>
                      <NavLink className="text-white" to="/about">
                        About Me
                      </NavLink>
                      <NavLink className="text-white" to="/portfolio">
                        Portfolio
                      </NavLink>
                      <NavLink className="text-white" to="/services">
                        Services
                      </NavLink>
                      <NavLink
                        disabled
                        className="text-white hidden"
                        to="/contact"
                      >
                        Contact Us
                      </NavLink>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
            <div className="contactContainer">
              <NavLink className="text-white border-none " to="/contact">
                <Button className="" variant="secondary">
                  Contact Me
                </Button>{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
