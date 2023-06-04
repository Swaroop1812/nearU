import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const DriverRegister = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Card>
            <CardHeader className="text-center bg-white">
              <h4 className="mb-0">Join as a Driver</h4>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input type="text" name="firstName" id="firstName" />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input type="text" name="lastName" id="lastName" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input type="tel" name="phone" id="phone" />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" />
                </FormGroup>
                <FormGroup>
                  <Label for="confirmPassword">Confirm Password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="carMake">Car Make</Label>
                  <Input type="text" name="carMake" id="carMake" />
                </FormGroup>
                <FormGroup>
                  <Label for="carModel">Car Model</Label>
                  <Input type="text" name="carModel" id="carModel" />
                </FormGroup>
                <FormGroup>
                  <Label for="licensePlate">License Plate Number</Label>
                  <Input type="text" name="licensePlate" id="licensePlate" />
                </FormGroup>
                <FormGroup className="text-center">
                  <Button color="primary" size="lg" block>
                    Register
                  </Button>
                </FormGroup>
              </Form>
              <p className="text-center">
                Already have an account? <Link to="/driver/login">Sign In</Link>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DriverRegister;
