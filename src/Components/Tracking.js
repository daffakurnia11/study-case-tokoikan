import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Tracking() {
  return (
    <section className="tracking mt-5">
      <div className="tracking-divider"></div>
      <Container>
        <Row>
          <Col lg={6} className="px-5 mb-5 mb-lg-0">
            <h3 className="tracking-title text-center">
              Lacak Pengiriman Anda
            </h3>
            <p className="tracking-desc text-center">
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <div className="d-flex">
              <Form.Control
                className="py-md-3 ps-md-4"
                type="text"
                placeholder="Lacak Pengiriman"
              />
              <Button className="tracking-button px-5 py-md-3 ms-3">
                Lacak
              </Button>
            </div>
          </Col>
          <Col lg={6} className="px-5">
            <h3 className="tracking-title text-center">
              Cek Tarif Pengiriman Anda
            </h3>
            <div className="d-flex gap-4 mb-4">
              <Form.Control
                className="py-md-3 ps-md-4"
                type="text"
                placeholder="Origin"
              />
              <Form.Control
                className="py-md-3 ps-md-4"
                type="text"
                placeholder="Destination"
              />
            </div>
            <Button className="tracking-button px-5 py-md-3 w-100">
              Check
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
