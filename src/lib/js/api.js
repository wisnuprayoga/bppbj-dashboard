import axios from 'axios'
import {ApiURL} from './vars'

export function GeneralAPI() {
  return axios.create({
    baseURL : ApiURL
  })
}
