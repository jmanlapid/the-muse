import React from 'react'
import ReactDOM from 'react-dom'

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    // console.log('lol okay', props)
  }

  render() {
    let locations = this.props.job.locations.map((location) => {
      return location.name
    }).toString()

    let levels = this.props.job.levels.map((level) => {
      return level.name
    }).toString()

    return (
      <a href={ this.props.job.refs.landing_page } className="collection-item">
        <h5>{ this.props.job.name }</h5>
         <p>{ this.props.job.company.name } <br/>
            { locations } <br/>
            { levels }
         </p>
      </a>
    )
  }
}

module.exports = ListItem
