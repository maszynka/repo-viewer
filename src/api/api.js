import axios from 'axios';

let token = null

export const setupApi = newToken => {
  token = newToken
  console.log(token)
}
  
export default ()=> {
  console.log(token);
return axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${
      token
    }`,
  },
})
}