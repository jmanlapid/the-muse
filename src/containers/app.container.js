import React from 'react'
import ReactDOM from 'react-dom'
import ListItem from '../components/list-item.component.js'
import JobsService from '../services/jobs.service.js'
const jobsService = new JobsService()

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    jobsService.getJobs({})
    .then((res) => {
      let data = res.data
      console.log(data)
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

  render() {
    let jobsList = this.state.jobs.map((job, index) => {
      return <ListItem job={ job } key={ index }></ListItem>
    })

    console.log(jobsList)

    return (
      <ul className="collection">
        { jobsList }
      </ul>
    )
  }

  changeParams() {

  }
}

module.exports = AppContainer
