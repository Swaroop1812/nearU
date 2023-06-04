import React from "react";
// import HeroSlider from "../components/UI/HeroSlider";
import HeroSlider1 from "../components/UI/HeroSlider1";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

const Home = () => {
  return (
    <>
      <Helmet title="Home" />
      {/* ============= hero section =========== */}
      {/* <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your near cab here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section> */}

      <section className="p-0 hero__slider-section">
        <HeroSlider1 />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your near auto here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />
    </>
  );
};

export default Home;
