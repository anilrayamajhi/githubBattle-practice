import React from 'react';
import {PropTypes} from 'react';
import {Link} from 'react-router';
import {transparentBg, space} from '../styles';
import UserDetailsWrapper from './UserDetailsWrapper';
import UserDetails from './UserDetails';
import MainContainer from './MainContainer';

// function puke(obj) {
//   return <pre>{JSON.stringify(obj, null, ' ')}</pre>
// }


//StartOver component/ private component
function StartOver(){
  return (
    <div className="col-sm-12" style={space}>
      <Link to='/playerOne'>
        <button className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  )
}

function Results (props){
  if(props.isLoading === true){
    return(
      <p>LOADING!</p>
    )
  }

  if(props.scores[0] === props.scores[1]){
    return(
      <MainContainer>
        <h1>It's a tie</h1>
        <StartOver />
      </MainContainer>
    )
  }

  let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  let losingIndex = winningIndex === 1 ? 0 : 1;
  return (
    <MainContainer>
      <h1>Results</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Winner'>
            <UserDetails scores={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Loser'>
            <UserDetails scores={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
          </UserDetailsWrapper>
        </div>
        <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results
