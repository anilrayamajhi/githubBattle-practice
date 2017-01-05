var React = require('react');
import {transparentBg, btnColor} from '../styles';

function ConfirmBattle(props){
  // return (props.isLoading) ? <p> LOADING! </p> : <p> CONFIRM BATTLE!! </p>
  return (
    <h1 className="jumbotron col-sm-12 text-center" style={transparentBg}> ganey  {props.header} </h1>
  )
}

module.exports = ConfirmBattle;
