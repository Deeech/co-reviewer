import { Link, IndexLink } from 'react-router';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className="grey darken-4" style={{marginBottom: 30 + 'px'}}>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Co-Reviewer</a>
            <ul className="right">
              <li><IndexLink to="/index">Index</IndexLink></li>
              <li><Link to="/text">Text</Link></li>
            </ul>
          </div>
        </nav>
        { this.props.children }
      </div>
    )
  }

  componentDidMount() {
  }
}

export default Navigation;
