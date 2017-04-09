import React from 'react'
import ReactDOM from 'react-dom'

class JobLevel extends React.Component {
  constructor(props) {
    super(props)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  toggleCheckbox(event) {
    let label = event.target.value
    this.props.handleChange('level', label)
  }

  render() {
    const levels = ['Internship', 'Entry Level', 'Mid Level', 'Senior Level']
    .map((level) => {
      return (
        <p key={level}>
          <input id={level} type="checkbox" name={level} value={level} onChange={this.toggleCheckbox} />
          <label htmlFor={level}>{level}</label>
        </p>
      )
    })

    return (
      <form>
        <h4>Level</h4>
        { levels }
      </form>
    )
  }
}

module.exports = JobLevel
