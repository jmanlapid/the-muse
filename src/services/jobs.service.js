import axios from 'axios'
/*
api_key
page
descending
company
category
level
location
 */

const BASE_URL = 'https://api-v2.themuse.com/jobs'
const API_KEY = '6639adcdcf8026f1efa33babc4e7949f6031a0dba0c91b464b92a20ed442edc6'

class JobsService {
  constructor() {
    this.hello = 'hello'
  }

  getJobs(params) {
    params.api_key = API_KEY
    params.page = 0

    return axios.get(BASE_URL, {
      params: params
    })
  }
}

module.exports = JobsService
