import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import GooglePlayLogo from "../img/google-play-logo.svg";
import GooglePlayLabel from "../img/google-play-label.svg";
import AppStoreLogo from "../img/app-store-logo.svg";
import AppStoreLabel from "../img/app-store-label.svg";
import AppsImage from "../img/header-img-apps.png";
import FishesImage from "../img/header-img-fishes.png";

export default function Header() {
  return (
    <section className="header">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="header-title mb-4 text-center text-lg-start">
              Kirim berbagai jenis
              <br />
              ikan dengan mudah
            </h1>
            <p className="header-desc text-center text-lg-start">
              A Lorem Ipsum is simply dummy text of the printing and <br />{" "}
              typesetting industry. Lorem Ipsum has been the industry's
            </p>
            <div className="d-flex my-5 justify-content-center justify-content-lg-start flex-column flex-sm-row align-items-center">
              <Button className="header-button d-flex me-sm-4 mb-4 mb-sm-0">
                <img src={GooglePlayLogo} alt="google-play-logo.svg" />
                <img src={GooglePlayLabel} alt="google-play-label.svg" />
              </Button>
              <Button className="header-button d-flex">
                <img src={AppStoreLogo} alt="app-store-logo.svg" />
                <img src={AppStoreLabel} alt="app-store-label.svg" />
              </Button>
            </div>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <div className="me-5">
                <h2 className="header-count">1.9k+</h2>
                <p className="header-count-label">Active Users</p>
              </div>
              <div>
                <h2 className="header-count">20+</h2>
                <p className="header-count-label">New Features</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="header-img d-flex align-items-center">
              <img
                src={FishesImage}
                alt="header-img-fishes.png"
                className="fishes-img"
              />
              <img
                src={AppsImage}
                alt="header-img-apps.png"
                className="apps-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="header-bg"></div>
    </section>
  );
}
