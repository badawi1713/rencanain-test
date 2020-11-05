import React from "react";
import { Link } from "react-router-dom";

import { Card, Button, Form } from "react-bootstrap";
const RegisterForm = () => {
  const horizontalLine = {
    flex: 1,
    height: "2px",
    backgroundColor: "#e7e7e7",
  };
  return (
    <Card className="card-shadow">
      <Card.Body>
        <div className="text-center">
          <h4>Daftar Sekarang</h4>
          <div className="mb-3">
            Sudah punya akun Rencanain?{" "}
            <Link to="/" style={{ color: "#0071BC" }}>
              Masuk
            </Link>
          </div>
        </div>
        <div className="google-signup-bar mb-3">
          <div className="google-logo" />
          <p>Daftar dengan Akun Google</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="my-2"
        >
          <div style={horizontalLine} />
          <div className="px-3 font-weight-light">atau daftar dengan</div>
          <div style={horizontalLine} />
        </div>
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Konfirmasi Password</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
        </Form>
        <Button className="mb-1" type="submit" block>
          Daftar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RegisterForm;
