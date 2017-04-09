import axios from 'axios'

const BASE_URL = 'https://api-v2.themuse.com/jobs?'
const API_KEY = '6639adcdcf8026f1efa33babc4e7949f6031a0dba0c91b464b92a20ed442edc6'

const encodeQueryData = (data) => {
   let ret = []
   for (let prop in data) {
     if (typeof data[prop] === 'object' && data[prop].size) {
       data[prop].forEach((value) => {
         ret.push(encodeURIComponent(prop) + '=' + encodeURIComponent(value))
       })
     } else if (typeof data[prop] === 'object' && !data[prop].size) {
       continue
     } else {
       ret.push(encodeURIComponent(prop) + '=' + encodeURIComponent(data[prop]))
     }
   }
   return ret.join('&');
}

class JobsService {
  constructor() {

  }

  getJobs(params) {
    params.api_key = API_KEY
    params.page = 0
    let encoded = encodeQueryData(params)
    console.log('encoded query params', encoded)
    return axios.get(BASE_URL + encoded)
  }
}

module.exports = JobsService
