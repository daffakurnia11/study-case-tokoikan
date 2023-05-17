import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import BoxIcon from "../img/box-icon.svg";
import CursorIcon from "../img/cursor-icon.svg";
import ShieldIcon from "../img/shield-icon.svg";

export default function Privilege() {
  return (
    <section className="privilege">
      <Container>
        <h2 className="privilege-title text-center">Keunggulan Kami</h2>
        <p className="privilege-desc text-center">
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <Row className="justify-content-center">
          <Col lg={4} md={6}>
            <Card className="privilege-card my-3">
              <div className="privilege-icon-box mx-auto">
                <img src={BoxIcon} alt="icon-img" />
              </div>
              <Card.Body>
                <Card.Title className="privilege-point text-center">
                  Kirim ke Berbagai Negara
                </Card.Title>
                <Card.Text className="privilege-detail text-center">
                  A Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="privilege-card my-3">
              <div className="privilege-icon-box mx-auto">
                <img src={CursorIcon} alt="icon-img" />
              </div>
              <Card.Body>
                <Card.Title className="privilege-point text-center">
                  Mudah Digunakan
                </Card.Title>
                <Card.Text className="privilege-detail text-center">
                  A Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="privilege-card my-3">
              <div className="privilege-icon-box mx-auto">
                <img src={ShieldIcon} alt="icon-img" />
              </div>
              <Card.Body>
                <Card.Title className="privilege-point text-center">
                  Pengiriman Aman
                </Card.Title>
                <Card.Text className="privilege-detail text-center">
                  A Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
