import React from 'react';
// import {transparentBg, btnColor} from '../styles';
import Prompt from '../components/Prompt'
// import {Link} from 'react-router';
// var transparentBg = require('../styles').transparentBg;

var promptContainer = React.createClass({
  contextTypes: {
    //add router to context so that no need to call react-router in case of using same component
    router: React.PropTypes.object.isRequired
    // can also be used by inporting eg:
    //var PropTypes = 'router'.PropTypes; then;
    // router: PropTypes.object.isRequired
  },

  getInitialState() {
    return{
      username: ''
    }
  },

  handleUpdateUser(e) {
    this.setState({
      username: e.target.value
    })
  },

  handleSubmitUser(e){
    e.preventDefault();
    var username = this.state.username;
    // console.log(this.state);
    // console.log(this);
    this.setState({
      username: ''
    });
    if(this.props.routeParams.playerOne){
      // console.log(this.context);
      this.context.router.push({
        pathname: '/battle/',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else{
      // console.log(this);
      // console.log(this.context);
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render() {
    return (
      <Prompt
      onSubmitUser={this.handleSubmitUser}
      onUpdateUser={this.handleUpdateUser}
      header={this.props.route.header}
      username={this.state.username} />
    )
  }
});


// class promptContainer extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     username: "",
  //   };
  // }
//};
module.exports = promptContainer
