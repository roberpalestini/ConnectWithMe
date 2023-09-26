import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              I fell in love with web sites developer since 2012...️
              <br />
              <br />Actually im Front-end Developer at Banco Galicia COMEX app (Foreign Trade), focusing on developing designs 
 and wireframes into high-quality <i>
                <b className="purple"> React.js and Node.js code.</b>
              </i>  <br />
               I am in charge of profiling and improving the performance of the front-end for Payment Order & Transfer.   <br />
 I built a very nice series of CRUDS. (People, Contacts, Comisions, Correspondents).   <br />
 I wrote a modern, and effective MT103/MT199 tray fetching data from Endpoints from our Microservices.
  <br />
              <br />
              
Developed from scracth Full System for Guarantee’s with  
 &nbsp;
              <i>
                <b className="purple">Azure Auth & OAuth, JWT bearer token, BFF in Nestsjs, Backend in .Net Core 6, DevOps configuration: using redhat for Kubernetes, openshift, jenkins.</b> 
                
              </i>
           
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/robertopalestini"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/robert-a-palestini-483586b1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
