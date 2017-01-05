var React = require('react');
import {transparentBg, btnColor} from '../styles';

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle(props){console.log('RENDER', props);
  return (props.isLoading)
    ? <p style={transparentBg}> LOADING! </p>
    : <div style={transparentBg}> CONFIRM BATTLE!! <br /> {puke(props)}</div>
}

module.exports = ConfirmBattle;
