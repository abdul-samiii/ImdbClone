import axios from 'axios'

const baseurl = 'http://localhost:5500/'

export const httpRequest = axios.create({
  baseURL: baseurl,
})
