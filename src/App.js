import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <Container fluid>
    <Row>
      <Col>
        <Router>
        <Route />
        </Router>
      </Col>
    </Row>
  </Container>
  );
}

export default App;
