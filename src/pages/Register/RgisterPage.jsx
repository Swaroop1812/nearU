import React from "react";
import { Container, Row, Col } from "reactstrap";
import RiderRegister from "./RiderRegisterPage";
import DriverRegister from "./DriverRegisterPage";

const Register = () => {
  return (
    <div className="register-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <div className="register-form">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#rider-register"
                    role="tab"
                  >
                    Register as a Rider
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#driver-register"
                    role="tab"
                  >
                    Register as a Driver
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="rider-register"
                  role="tabpanel"
                >
                  <RiderRegister />
                </div>
                <div
                  className="tab-pane fade"
                  id="driver-register"
                  role="tabpanel"
                >
                  <DriverRegister />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
