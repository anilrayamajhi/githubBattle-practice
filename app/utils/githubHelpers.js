import axios from 'axios';

//is case of rate limit
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var params = "?client_id=" + id + "&client_secret=" + sec

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username)
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
          console.log('ERROR', err);
        })
    }
}

module.exports = helpers;
