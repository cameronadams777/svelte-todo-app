import axios from 'axios'

export const get = ({ endpoint, headers, params }) => {
  const url = `http://localhost:3000/${endpoint}`

  return axios({
    url,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      ...headers,
    },
    params
  })
}

export const post = ({ endpoint, payload, headers }) => {
  const url = `http://localhost:3000/${endpoint}`

  return axios({
    url,
    method: 'POST',
    data: payload,
    headers: {
      Accept: 'application/json',
      ...headers,
    },
  })
}

export const put = ({ endpoint, payload, headers }) => {
  const url = `http://localhost:3000/${endpoint}`

  return axios({
    url,
    method: 'PUT',
    data: payload,
    headers: {
      Accept: 'application/json',
      ...headers,
    },
  })
}

export const del = ({ endpoint, payload, headers }) => {
  const url = `http://localhost:3000/${endpoint}`

  return axios({
    url,
    method: 'DELETE',
    data: payload,
    headers: {
      Accept: 'application/json',
      ...headers,
    },
  })
}