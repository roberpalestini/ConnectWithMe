import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiBootstrap,
    DiOpenshift, 
} from "react-icons/di";
import {SiMicrosoftazure,SiAmazonaws,SiRedhat, SiJenkins,  SiGrafana ,SiJsonwebtokens, SiKibana, SiKubernetes, SiHtml5,SiNpm,SiMongodb ,SiNestjs,SiPowerautomate, SiPostcss, SiNextdotjs, SiTypescript, SiSalesforce, SiRedux, SiReacthookform, SiReactrouter} from "react-icons/si";
import {GiShoppingCart} from "react-icons/gi";

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
