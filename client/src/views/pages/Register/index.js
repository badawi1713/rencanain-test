import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";

import RegisterForm from "../../components/RegisterForm";

import "./Register.css";
import Logo from "../../../assets/images/rencanain-logo.png";

const Register = () => {
  return (
    <>
      <header className="header py-3">
        <Image className="mx-auto d-block" fluid src={Logo} width={360} />
      </header>
      <Container className="my-4">
        <Row style={{ minHeight: "70vh" }}>
          <Col xs={12} lg={7} className="d-none d-lg-block">
            <Image
              className="mx-auto my-auto d-block"
              fluid
              src="https://www.fouragain.com/wp-content/uploads/2020/03/ppc.gif"
              width="100%"
            />
          </Col>
          <Col xs={12} lg={5}>
            <RegisterForm />
          </Col>
        </Row>
      </Container>
      <hr />
      <footer className="py-2 text-center">&copy;2020 - Rencanain</footer>
    </>
  );
};

export default Register;
