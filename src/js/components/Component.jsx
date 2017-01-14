import { Col, Row, Button } from 'react-materialize';
import { connect } from 'react-redux';

class Comments extends React.Component {
  render() {
    return (
      <div>
        <h4>{ this.comment.title }</h4>
        <p>{ this.comment.text }</p>
      </div>
    )
  }
}

export default connect(
  () => ({}),
  {}
)(Comment);
