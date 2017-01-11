import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Button } from 'react-materialize';


class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col s={12}>
            <div className="input-field">
              <textarea id="text" className="materialize-textarea" placeholder="Place your text here..."></textarea>
              <label htmlFor="text">Text</label>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  componentDidMount() {
    console.log(this);
  }
}

export default connect(
  (state) => ({
    state: state
  }),
  {}
)(Index);
