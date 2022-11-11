import axios from 'axios'

// export const baseurl = 'http://localhost:5500/'
export const baseurl = 'https://imdbsami.herokuapp.com/'

export const httpRequest = axios.create({
  baseURL: baseurl,
})
