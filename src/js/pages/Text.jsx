import React from 'react';
import { Col, Row, Button } from 'react-materialize';


class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col s={12}>
            <div className="input-field">
              <textarea id="text" className="materialize-textarea" placeholder="Place your text here..."></textarea>
              <label for="text">Text</label>
            </div>
          </Col>
        </Row>
      <div>
    );
  }
}

export default Index;
