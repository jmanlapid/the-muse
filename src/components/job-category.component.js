import React from 'react'
import ReactDOM from 'react-dom'
import CategoriesJSON from '../struts/categories.json'

class JobCategory extends React.Component {
  constructor(props) {
    super(props)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  toggleCheckbox(event) {
    let label = event.target.value
    this.props.handleChange('category', label)
  }

  render() {
    let categories = CategoriesJSON.map((category) => {
      return (
        <p key={category}>
          <input id={category} type="checkbox" name={category} value={category} onChange={this.toggleCheckbox} />
          <label htmlFor={category}>{category}</label>
        </p>
      )
    })

    return (
      <form>
        <h4>Categories</h4>
        { categories }
      </form>
    )
  }
}

module.exports = JobCategory
