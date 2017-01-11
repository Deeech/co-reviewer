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
      </div>
    )
  }
}

export default Comments;
