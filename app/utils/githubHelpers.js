var axios = require('axios');

const URL = 'https://api.github.com/users/'

// returns a single promise containing user info
function getUserInfo(username){
  return axios.get(`${URL}${username}`)
}

// returns an array of promises containing user info
function getUsersInfo(usernamesList) {
  return usernamesList.map((username) =>  getUserInfo(username))
}



var helpers = {
  getPlayersInfo: (players) => {
    let userInfoPromises = getUsersInfo(players);
    return axios.all(userInfoPromises)
    .then((info) => {
      console.log(info);
    })
  }
};

module.exports = helpers;
