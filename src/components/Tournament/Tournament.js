import React from 'react'
import { Column } from 'react-foundation';
// import './Tournament.css'

export default class Tournament extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='display'>
        <Column small={3} offsetOnSmall={1}><h6>{this.props.tournament.name}</h6></Column>
        <Column small={2}><h6>{this.props.tournament.date}</h6></Column>
        <Column small={3}><h6>{this.props.tournament.location}</h6></Column>
        <Column small={2}><h6>{this.props.tournament.gi ? "Gi" : "No Gi"}</h6></Column>
        <Column small={1}></Column>
      </div>
    )
  }
}
