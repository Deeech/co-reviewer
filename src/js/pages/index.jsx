import React from 'react';
import { Col, Row, Button } from 'react-materialize';


class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col s={4}>
            <h2>Sidebar</h2>
          </Col>
          <Col s={8}>
            <h1>Main</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Index;
