import React from "react";
import { Modal, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const LoginForm = ({ show, handleClose }) => {
  const horizontalLine = {
    flex: 1,
    height: "2px",
    backgroundColor: "#e7e7e7",
  };
  const iconStyle = {
    color: "#969595",
  };
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Card
        style={{
          boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        }}
      >
        <Card.Body>
          <div
            onClick={handleClose}
            className="text-right"
            style={{ cursor: "pointer" }}
          >
            <i style={iconStyle} className="fas fa-times"></i>
          </div>

          <h5 className="my-4">Masuk</h5>
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <div className="text-right mb-3">
              <Link to="/">Lupa password?</Link>
            </div>
            <Button type="submit" block>
              Masuk
            </Button>
          </Form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="my-3"
          >
            <div style={horizontalLine} />
            <div className="px-3 font-weight-light">Belum memiliki akun?</div>
            <div style={horizontalLine} />
          </div>
          <Button
            type="button"
            className="btn-light btn-outline-primary mb-3"
            block
          >
            Daftar
          </Button>
        </Card.Body>
      </Card>
    </Modal>
  );
};

export default LoginForm;
