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
      playerInfo: []
    }
  },

  componentDidMount: function() {
    var query = this.props.location.query;
    // console.log('QUERY', query);
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
      console.log('PLAYERS', players);
    })
  },

  render: function() {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo = {this.state.playersInfo}
      header={this.state.playersInfo}/>
    )
  }
});

module.exports = ConfirmBattleContainer;
