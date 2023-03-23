import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function FormDatadiri() {
  const date = new Date();
  const currentYear = date.getFullYear();

  const [NPM, setNPM] = useState(0);
  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      setShow(true);
    }
    setValidated(true);
  };

  const Age = currentYear - parseInt(Birthdate.slice(0, 4));

  return (
    <div>
      <Card
        style={{
          width: "25rem",
          marginLeft: "32rem",
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
      >
        <Card.Body>
          <Card.Title className="text-center">Form Data Diri</Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="NPM">
              <Form.Label>NPM</Form.Label>
              <Form.Control
                placeholder="Enter NPM"
                onChange={(e) => setNPM(e.target.value)}
                required
                maxlength="10"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <Form.Text
                className="text-muted"
                style={{
                  fontSize: "12px",
                }}
              >
                NPM is a required field with a maximum of 10 numeric digits
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                NPM is a required field
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="FirstName">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                type="text"
                placeholder="FirstName"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Firstname is a required field
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="MiddleName">
              <Form.Label>MiddleName</Form.Label>
              <Form.Control
                type="text"
                placeholder="MiddleName"
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridLastName">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                type="text"
                placeholder="LastName"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Lastname is a required field
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Birthdate">
              <Form.Label>Birthdate</Form.Label>
              <Form.Control
                placeholder="YYYY-MM-DD
              "
                onChange={(e) => setBirthdate(e.target.value)}
                required
                type="text"
                class="form-control datepicker"
                name="Birthdate"
              />
              <Form.Control.Feedback type="invalid">
                Birthdate is a required field
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="d-flex justify-content-center">
          <Modal.Title>Your Personal Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs="3">NPM</Col>
              <Col xs="1">:</Col>
              <Col>{NPM}</Col>
            </Row>
            <Row>
              <Col xs="3">Fullname</Col>
              <Col xs="1">:</Col>
              <Col>
                {FirstName} {MiddleName} {LastName}
              </Col>
            </Row>
            <Row>
              <Col xs="3">Age</Col>
              <Col xs="1">:</Col>
              <Col>
                {Age}{" "}
                {Age.toString().slice(-1) === 1
                  ? "st"
                  : Age.toString().slice(-1) === 2
                  ? "nd"
                  : Age.toString().slice(-1) === 3
                  ? "rd"
                  : "th"}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FormDatadiri;
