var React = require('react');
import {PropTypes} from 'react';
import {Link} from 'react-router';
import {transparentBg, btnColor, space} from '../styles';
import UserDetailsWrapper from './UserDetailsWrapper';
import UserDetails from './UserDetails'

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle(props){console.log('RENDER', props);
  return (!!props.isLoading)
    ? <p style={transparentBg}> LOADING! </p>
    : <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Player 1'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Player 2'>
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12' style={space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </div>
}

ConfirmBattle.proptypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
