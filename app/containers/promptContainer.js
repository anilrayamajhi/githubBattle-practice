import React from 'react';
import {transparentBg} from '../styles';
// var transparentBg = require('../styles').transparentBg;

class promptContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
    };
  }

  onUpdateUser(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUser}>
            <div className="form-group">
              <input className="form-control" placeholder="Github Username" onChange={this.onUpdateUser}  value={this.state.username} type="text"/>
            </div>
          </form>
        </div>
        <div className="form-group col-sm-4 col-sm-offset-4">
          <button className="btn btn-block btn-success" type="submit">Continue</button>
        </div>
      </div>
    )
  }

  // getInitialState() {
  //   return{
  //     username: ''
  //   }
  // }

};

module.exports = promptContainer
