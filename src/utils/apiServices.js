const axios = require('axios');

function request(URL, method, payload) {
  console.log(URL);
  return new Promise((resolve, reject) => {
    axios({
      method,
      URL,
      data: payload
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    });
  });
}
module.exports = {
  request
}