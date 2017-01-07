var React = require('react');
import {Link} from 'react-router';
import {transparentBg, btnColor} from '../styles';
import MainContainer from './MainContainer';

class Home extends React.Component {
  render() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className='lead'>React GitHub Battle Practice</p>
        <Link to={`playerOne`}>
          <button className="btn btn-lg btn-success" type="submit" style={btnColor}>Get Started</button>
        </Link>
      </MainContainer>
    )
  }
};

module.exports = Home;
