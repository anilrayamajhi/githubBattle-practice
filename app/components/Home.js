var React = require('react');
import {Link} from 'react-router';
import {transparentBg} from '../styles';

class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Github Battle</h1>
        <p className='lead'>Some fancy moto</p>
        <Link to={`playerOne`}>
          <button className="btn btn-lg btn-success" type="submit">Get Started</button>
        </Link>
      </div>
    )
  }
};

module.exports = Home;
