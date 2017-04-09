import React from 'react'
import ReactDOM from 'react-dom'
import CompaniesJSON from '../struts/companies.json'

class JobCompany extends React.Component {
  constructor(props) {
    super(props)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  toggleCheckbox(event) {
    let label = event.target.value
    this.props.handleChange('company', label)
  }

  render() {
    let companies = CompaniesJSON.map((company) => {
      return (
        <p key={company}>
          <input id={company} type="checkbox" name={company} value={company} onChange={this.toggleCheckbox} />
          <label htmlFor={company}>{company}</label>
        </p>
      )
    })

    return (
      <form>
        <h4>Companies</h4>
        { companies }
      </form>
    )
  }
}

module.exports = JobCompany
