import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Button } from 'react-materialize';
import Comments from '../components/Comments';


class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col s={4}>
            <h2>Sidebar</h2>
            <Comments comments={this.props.comments} />
          </Col>
          <Col s={8}>
            <h1>Main</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  state => ({
    comments: state.comments,
  }),
  {}
)(Index);
