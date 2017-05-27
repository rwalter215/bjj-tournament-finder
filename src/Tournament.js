const React = require('react')
const ReactDOM = require('react-dom')
// import './styles/Tournament.css'

const Tournament = React.createClass({
  render() {
    return (
      <div className='row'>
        <h6 className='small-3 small-offset-1 columns'>{this.props.tournament.name}</h6>
        <h6 className='small-2 columns'>{this.props.tournament.date}</h6>
        <h6 className='small-3 columns'>{this.props.tournament.location}</h6>
        <h6 className='small-2 columns'>{this.props.tournament.gi ? "Gi" : "No Gi"}</h6>
        <div className='small-1 columns'></div>
      </div>
    )
  }
})

export default Tournament
