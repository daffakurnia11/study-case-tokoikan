import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FirstMockupApp from "../img/features/mockup1.png";
import FirstFish from "../img/features/fish1.png";
import SecondMockupApp from "../img/features/mockup2.png";
import SecondFish from "../img/features/fish2.png";
import ThirdMockupApp from "../img/features/mockup3.png";
import ThirdFish from "../img/features/fish3.png";

export default function Features() {
  return (
    <>
      {/* First Features */}
      <section className="features odd">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="features-title mb-4 text-center text-lg-start">
                Berbagai Metode Pengiriman
              </h1>
              <p className="features-desc text-center text-lg-start">
                A Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard.
              </p>
            </Col>
            <Col lg={6}>
              <div className="features-img">
                <img
                  src={FirstFish}
                  alt="features-img-fishes.png"
                  className="fishes-img"
                />
                <img
                  src={FirstMockupApp}
                  alt="features-img-apps.png"
                  className="apps-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="features-bg"></div>
      </section>
      {/* Second Features */}
      <section className="features even">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2 order-1">
              <h1 className="features-title mb-4 text-center text-lg-start">
                Lacak Status Pengiriman Anda
              </h1>
              <p className="features-desc text-center text-lg-start">
                A Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard.
              </p>
            </Col>
            <Col lg={6} className="order-lg-1 order-2">
              <div className="features-img">
                <img
                  src={SecondFish}
                  alt="features-img-fishes.png"
                  className="fishes-img"
                />
                <img
                  src={SecondMockupApp}
                  alt="features-img-apps.png"
                  className="apps-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="features-bg"></div>
      </section>
      {/* Third Features */}
      <section className="features odd">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="features-title mb-4 text-center text-lg-start">
                Cek Schedule Pengiriman Anda
              </h1>
              <p className="features-desc text-center text-lg-start">
                A Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard.
              </p>
            </Col>
            <Col lg={6}>
              <div className="features-img">
                <img
                  src={ThirdFish}
                  alt="features-img-fishes.png"
                  className="fishes-img"
                />
                <img
                  src={ThirdMockupApp}
                  alt="features-img-apps.png"
                  className="apps-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="features-bg"></div>
      </section>
    </>
  );
}
