import React from "react";
import { Card, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import StarFullIcon from "../img/star-full-icon.svg";
import StarEmptyIcon from "../img/star-empty-icon.svg";

const testimoniData = [
  {
    avatar: "person1.png",
    name: "Floyd Miles",
    testimonial:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    avatar: "person2.png",
    name: "Ronald Richards",
    testimonial:
      "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    avatar: "person3.png",
    name: "Savannah Nguyen",
    testimonial:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    avatar: "person4.png",
    name: "Floyd Miles",
    testimonial:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimoni">
      <Container>
        <h2 className="testimoni-title text-center">Testimonial</h2>
        <p className="testimoni-desc text-center">
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
      </Container>
      <Swiper
        modules={[Pagination, Scrollbar]}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        slidesPerView={"auto"}
        navigation
      >
        {testimoniData.map((data) => (
          <SwiperSlide>
            <Card className="testimoni-card my-3">
              <div className="d-flex justify-content-between">
                <img
                  src={require(`../img/testimoni/${data.avatar}`)}
                  alt="icon-img"
                  className="testimoni-avatar"
                />
                <div>
                  <img src={StarFullIcon} alt="star-icon.svg" />
                  <img src={StarFullIcon} alt="star-icon.svg" />
                  <img src={StarFullIcon} alt="star-icon.svg" />
                  <img src={StarFullIcon} alt="star-icon.svg" />
                  <img src={StarEmptyIcon} alt="star-icon.svg" />
                </div>
              </div>
              <Card.Body className="p-0">
                <Card.Title className="testimoni-name my-3">
                  {data.name}
                </Card.Title>
                <Card.Text className="testimoni-said">
                  {data.testimonial}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
