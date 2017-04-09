import React from 'react'
import ReactDOM from 'react-dom'
import ListItem from '../components/list-item.component.js'
import JobLevel from '../components/job-level.component.js'
import JobCompany from '../components/job-company.component.js'
import JobLocation from '../components/job-location.component.js'
import JobCategory from '../components/job-category.component.js'
import JobDescending from '../components/job-descending.component.js'
import JobsService from '../services/jobs.service.js'
const jobsService = new JobsService()

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleDescending = this.handleDescending.bind(this)
    this.state = {
      jobs: [],
      page: 0,
      pageCount: 0,
      total: 0,
      params: {
        page: 0,
        descending: false,
        company: new Set(),
        category: new Set(),
        level: new Set(),
        location: new Set()
      }
    }
  }

  componentWillMount() {
    this.getJobs(this.state.params)
  }

  getJobs(params) {
    jobsService.getJobs(params)
    .then((res) => {
      let data = res.data
      this.setState({
        page: data.page,
        pageCount: data.page_count,
        total: data.total,
        jobs: data.results
      })
    }, (err) => {
      console.log(err)
    })
  }

  /**
   *
   * @param  {String} property property of params set to change
   * @param  {String} value    value of params set to add/remove
   * @return {Undefined}
   */
  handleChange(property, value) {
    const validProperties = ['page', 'descending', 'company', 'category', 'level', 'location']

    if (validProperties.indexOf(property) === -1) {
      throw new Error('param[0]', property, 'is not a valid property. Must be of the following', validProperties.toString())
    }

    let newProps = this.state.params[property]

    if (newProps.has(value)) {
      newProps.delete(value)
    } else {
      newProps.add(value)
    }

    let newParams = this.state.params
    newParams[property] = newProps

    this.setState({ params: newParams })
    this.getJobs(newParams)
  }

  handleDescending(checked) {
    if (typeof checked !== 'boolean') {
      throw new Error('param[0]', checked, 'is not a boolean')
    }

    let newParams = this.state.params
    newParams.descending = checked
    this.setState({ params: newParams })
    this.getJobs(newParams)
  }

  render() {
    let jobsList

    if (this.state.jobs.length) {
      jobsList = this.state.jobs.map((job, index) => {
        return <ListItem job={ job } key={ index }></ListItem>
      })
    } else {
      jobsList = <h4>No search results fit your criteria</h4>

    }

    return (
      <div className="container">
        <div className="row">
          <div className="col s2">
            <JobLevel handleChange={ this.handleChange }></JobLevel>
          </div>
          <div className="col s2">
            <JobCompany handleChange={ this.handleChange }></JobCompany>
          </div>
          <div className="col s2">
            <JobLocation handleChange={ this.handleChange }></JobLocation>
          </div>
          <div className="col s2">
            <JobCategory handleChange={ this.handleChange }></JobCategory>
          </div>
          <div className="col s2">
            <JobDescending handleDescending={ this.handleDescending }></JobDescending>
          </div>
        </div>
        <div className="row">
          <div className="collection">
            { jobsList }
          </div>
        </div>
      </div>
    )
  }
}

module.exports = AppContainer
