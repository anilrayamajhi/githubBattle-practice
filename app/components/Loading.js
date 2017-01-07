var React = require('react');
import {transparentBg} from '../styles';
import {PropTypes} from 'react';

let styles = {
  container: {
    fontSize: '55px',
  }
}

var Loading = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number,
  },
  getDefaultProps: function () {
    return {
      text: 'Loading',
      speed: 300
    }
  },

  getInitialState: function(){
    this.originalText = this.props.text;
    return {
      text: this.originalText,

    }
  },

  componentDidMount: function(){
    var stopper = this.originalText + '...';
    this.interval = setInterval(function() {
      if(this.state.text === stopper){
        this.setState({
          text: this.originalText
        })
      }
      else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), this.props.speed)
  },

  componentWillUnmount: function(){
    clearInterval(this.interval);
  },

  render: function(){
    return (
      <div className="jumbotron col-sm-12 text-center" style={Object.assign(transparentBg, styles.container)}>
        {this.state.text}
      </div>
    )
  }
});

module.exports = Loading;
