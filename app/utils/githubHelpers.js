import axios from 'axios';

//is case of rate limit
var id = "d9308aacf8b204d361fd";
var sec = "62551cc02cee983fff0bac41baf170eb5a312c1c";
var params = "?client_id=" + id + "&client_secret=" + sec

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + params)
}

function getRepos(username) {
  //fetch usernames repos
  return axios.get('https://api.github.com/users/' + username + '/repos')
}

function getTotalStars(repos){
  //calculate all the stars that the user has
  return repos.data.reduce((prev, current) =>{
    // console.log('prev: ', prev);
    // console.log('current.stargazers_count: ', current);
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData(player){
  //get repos
  //getTotalStars
  // return object with that data
  return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) =>{
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players){
  //retrun an array, after doing some fancy algorithms to determine a winner
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[0].followers * 3 + players[1].totalStars
  ]
}

let helpers = {
  //fetch some data from github
    getPlayersInfo: function(players) {
        return axios.all(players.map((username) => {
            return getUserInfo(username);
        })).then((info) => {
            return info.map((data) => {
              return data.data;
              // console.log('DATA', data.data);
            })
        }).catch((err) =>{
          console.log('ERROR IN GETPLAYERSINFO', err);
        })
    },
    battle: function(players) {
      var playerOneData = getPlayersData(players[0]);
      var playerTwoData = getPlayersData(players[1]);

      return axios.all([playerOneData, playerTwoData])
        .then(calculateScores)
        .catch((err) => {
          console.warn('ERROR IN BATTLE', err);
        })
    }
}

module.exports = helpers;
