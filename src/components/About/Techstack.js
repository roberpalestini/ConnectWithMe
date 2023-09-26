import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiBootstrap,
  DiJavascript1,
  DiNodejs,
  DiReact
} from "react-icons/di";
import { GiShoppingCart } from "react-icons/gi";
import { SiAmazonaws, SiHtml5, SiJsonwebtokens, SiMicrosoftazure, SiMongodb, SiRedhat, SiTypescript } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedhat />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJsonwebtokens />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
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
