var axios = require('axios');

const URL = 'https://api.github.com/users/'

// calls the githgub  api with a username and returns a single promise containing user info
function getUserInfo(username){
  return axios.get(`${URL}${username}`)
}

/*
iterates over a string of usernames and returns an array of promises containing user info
 */
function getUsersInfo(usernamesList) {
  return usernamesList.map((username) =>  getUserInfo(username))
}

function getUsersData(users) {
  return users.map((user) => user.data)
}

var helpers = {
  getPlayersInfo: (players) => {
    let userInfoPromises = getUsersInfo(players);
    return axios.all(userInfoPromises)
    .then((info) => {
      return getUsersData(info)
    })
    .catch((err) => console.log(err))
  }
};

module.exports = helpers;
