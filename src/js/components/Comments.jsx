import { Col, Row, Button } from 'react-materialize';
import { addComment } from '../actions/comments'
import { Comment } from './Comment'
import { connect } from 'react-redux';

class Comments extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.comments.map(c => (
            <Comment comment={c} />
          ))
        }
        <form onSubmit={this.addComment.bind(this)}>
          <Row>
            <Col s={12} className="input-field">
              <i className="material-icons prefix">mode_edit</i>
              <textarea id="i-comment" className="materialize-textarea" placeholder="Place your text here..."></textarea>
            </Col>
            <Col s={12} className="input-field">
              <input id="i-title" type="text" placeholder="title" />
            </Col>
            <Col s={12}>
              <button className="btn right">Add comment</button>
            </Col>
          </Row>
        </form>
      </div>
    )
  }

  addComment(e) {
    e.preventDefault();
    let form = e.target;

    this.props.addComment({
      title: form.querySelection('#i-title'),
      text: form.querySelection('#i-comment'),
    });
  }
}

export default connect(
  () => ({}),
  { addComment }
)(Comments);
