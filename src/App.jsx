import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Profile from "./components/Profile";
import Widgets from "./components/Widget/Widgets";
import "./App.css";

function App() {
  return (
    <Container fluid className="app-container">
      <Row className="vh-100">
        <Col xs={12} md={6} className="profile-section">
          <Profile />
        </Col>
        <Col xs={12} md={6} className="widgets-section">
          <Widgets />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
