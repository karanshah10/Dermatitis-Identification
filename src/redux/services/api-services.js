import { HOST, PORT } from '../../App-config';
import history from '../history';
import { request } from '../../utils/apiServices';
const axios = require('axios');

export function login(email, password) {
  console.log("api - service");
  const data = {
    'email': email,
    'password': password
  }

  return new Promise((resolve, reject) => {
    axios.post(HOST + PORT + '/login/login-user', data)
      .then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
  });
  // return request(
  //   HOST + PORT + '/login/user',
  //   'post', data
  // )
  //   .then(response => {
  //     console.log("Response")
  //     return response;
  //   })
  //   .catch(error => {
  //     console.log("Errors")

  //     return error;
  //   })
}

export function signUp(email, password) {
  const data = {
    'email': email,
    'password': password
  }
  return new Promise((resolve, reject) => {
    axios.post(HOST + PORT + '/signUp/signup-user', data)
      .then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
  });
}

const ApiServices = {
  login,
  signUp
}

export default ApiServices;