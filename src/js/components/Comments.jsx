import { Col, Row, Button } from 'react-materialize';

class Comments extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.comments.map(c => (
            <div>
              <h4>{ c.title }</h4>
              <p>{ c.text }</p>
            </div>
          ))
        }
        <Row>
          <Col s={12} className="input-field">
            <i className="material-icons prefix">mode_edit</i>
            <textarea className="materialize-textarea" placeholder="Place your text here..."></textarea>
            <button className="btn right">Add comment</button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Comments;
