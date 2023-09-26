import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiAws,
    DiDatabase,
    DiGit,
    DiMysql,
    DiTerminal,
} from "react-icons/di";
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiGithub,
    SiHeroku,
    SiVisualstudiocode
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiTerminal />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiAws />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDatabase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiHeroku />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAdobeillustrator />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAdobephotoshop />
        </Col>
    </Row>
  );
}

export default Toolstack;
