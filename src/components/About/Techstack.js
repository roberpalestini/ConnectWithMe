import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiBootstrap,
} from "react-icons/di";
import {SiHtml5} from "react-icons/si";
import {GiShoppingCart} from "react-icons/gi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <GiShoppingCart />
        </Col>
    </Row>
  );
}

export default Techstack;
