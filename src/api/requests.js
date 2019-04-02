import { SEARCH_USER, GET_USER, TEST } from './constants'
import api from './api'

export const searchUser = async searchString => api.post('', {
  query: SEARCH_USER,
  variables: { searchString }
})

export const getUser = login => api.post('', {
  query: GET_USER,
  variables: { login }
});

export const test = ()=> api.post('', {
    query: TEST
})


const requests = {
  searchUser,
  getUser
}

export default requests