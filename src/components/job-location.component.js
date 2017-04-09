import React from 'react'
import ReactDOM from 'react-dom'
import LocationsJSON from '../struts/locations.json'

class JobLocation extends React.Component {
  constructor(props) {
    super(props)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  toggleCheckbox(event) {
    let label = event.target.value
    this.props.handleChange('location', label)
  }

  render() {
    let locations = LocationsJSON.map((location) => {
      return (
        <p key={location}>
          <input id={location} type="checkbox" name={location} value={location} onChange={this.toggleCheckbox} />
          <label htmlFor={location}>{location}</label>
        </p>
      )
    })

    return (
      <form>
        <h4>Locations</h4>
        { locations }
      </form>
    )
  }
}

module.exports = JobLocation
