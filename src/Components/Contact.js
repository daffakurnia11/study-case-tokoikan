import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JBGLogo from "../img/jbg-logo.png";
import FBLogo from "../img/facebook-icon.svg";
import TWLogo from "../img/twitter-icon.svg";
import IGLogo from "../img/instagram-icon.svg";

export default function Contact() {
  return (
    <section className="contact mt-5">
      <Container>
        <Row>
          <Col lg={6} md={4}>
            <img src={JBGLogo} alt="jbg-logo.png" className="mb-3" />
            <p className="contact-desc">
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <div className="d-flex gap-3 my-4">
              <img src={FBLogo} alt="contact-icon" />
              <img src={TWLogo} alt="contact-icon" />
              <img src={IGLogo} alt="contact-icon" />
            </div>
          </Col>
          <Col lg={3} md={4}>
            <h4 className="contact-title">Menu Bantuan</h4>
            <ul className="contact-list">
              <li className="list-item">Keunggulan</li>
              <li className="list-item">Fitur Aplikasi</li>
              <li className="list-item">Testimoni</li>
            </ul>
          </Col>
          <Col lg={3} md={4}>
            <h4 className="contact-title">Informasi Kontak</h4>
            <ul className="contact-list">
              <li className="list-item">0812-9797-1227</li>
              <li className="list-item">0812-9797-1227</li>
              <li className="list-item">Jbgtranshipping@gmail.com</li>
            </ul>
          </Col>
        </Row>
        <p className="contact-copyright text-center mt-5">
          All rights reserved@2022
        </p>
      </Container>
    </section>
  );
}
