import React from 'react';
import { Col, Row, Button } from 'react-materialize';


class Index extends React.Component {
  render() {
    return (
      <Row>
        <Col s={4}>
          <h2>Sidebar</h2>
        </Col>
        <Col s={8}>
          <h1>Main</h1>
        </Col>
      </Row>
    );
  }
}

export default Index;
