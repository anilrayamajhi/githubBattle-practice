var React = require('react');
import {Proptypes} from 'react'
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers'

let ConfirmBattleContainer = React.createClass ({
  contextTypes: function(){
    route: PropTypes.object.isRequired
  },

  getInitialState: function(){
    return{
      isLoading: true,
      playersInfo: []
    }
  },

  componentDidMount: function() {
    var query = this.props.location.query;
    // console.log('QUERY', query);
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players) {
      // console.log('PLAYERS', players);
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
      })
    }.bind(this))
  },

  handleInitiateBattle: function(){
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },

  render: function() {
    // console.log('STATE', this.state);
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      onInitiateBattle = {this.handleInitiateBattle}
      playersInfo = {this.state.playersInfo}
      />
    )
  }
});

module.exports = ConfirmBattleContainer;
