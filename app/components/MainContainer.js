var React = require('react');
import {transparentBg} from '../styles';

function MainContainer (props){
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
    {props.children}
    </div>
  )
};

module.exports = MainContainer;
