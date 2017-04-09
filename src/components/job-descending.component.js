import React from 'react'
import ReactDOM from 'react-dom'

class JobDescending extends React.Component {
  constructor(props) {
    super(props)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  toggleCheckbox(event) {
    let checked = event.target.checked
    this.props.handleDescending(checked)
  }

  render() {
    return (
      <form>
        <h4>Descending</h4>
        <input type="checkbox" id="descending" value={ true } onChange={ this.toggleCheckbox } />
        <label htmlFor="descending">Descending</label>
      </form>
    )
  }
}

module.exports = JobDescending
