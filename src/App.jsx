import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Profile from "./components/Profile";
import Widgets from "./components/Widget/Widgets";
import "./App.css";

function App() {
  return (
    <main className="main-wrapper d-flex justify-content-center align-items-center">
      <Container fluid className="main-container">
        <Row className="gx-4 gy-4 align-items-stretch">
          <Col xs={12} md={6}>
            <Profile />
          </Col>
          <Col xs={12} md={6}>
            <Widgets />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
