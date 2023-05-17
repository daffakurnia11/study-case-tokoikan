import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import GooglePlayLogo from "../img/google-play-logo.svg";
import GooglePlayLabel from "../img/google-play-label.svg";
import AppStoreLogo from "../img/app-store-logo.svg";
import AppStoreLabel from "../img/app-store-label.svg";
import CourierImg from "../img/courier-img.png";

export default function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col lg={6}>
            <div
              className="px-xxl-5"
              style={{ paddingTop: 70, paddingBottom: 70 }}
            >
              <h2 className="footer-title text-center text-lg-start">
                Available and Download Anytime!
              </h2>
              <p className="footer-desc text-center text-lg-start">
                A Lorem Ipsum is simply dummy text of the printing and{" "}
              </p>
              <div className="d-flex my-sm-5 mt-3 mb-5 justify-content-center justify-content-lg-start flex-column flex-sm-row align-items-center">
                <Button className="footer-button d-flex me-sm-4 mb-4 mb-sm-0">
                  <img src={GooglePlayLogo} alt="google-play-logo.svg" />
                  <img src={GooglePlayLabel} alt="google-play-label.svg" />
                </Button>
                <Button className="footer-button d-flex">
                  <img src={AppStoreLogo} alt="app-store-logo.svg" />
                  <img src={AppStoreLabel} alt="app-store-label.svg" />
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="footer-img">
              <img
                src={CourierImg}
                className="courier-img"
                alt="courier-img.png"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
