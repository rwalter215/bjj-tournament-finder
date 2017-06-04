import React from 'react'
import { Column, Row } from 'react-foundation';
//import './TournamentListHeader.css'

const TournamentListHeader = () => (
    <Row className='display'>
      <Column small={3} offsetOnSmall={1}><h5>Date</h5></Column>
      <Column small={2}><h5>Name</h5></Column>
      <Column small={3}><h5>Location</h5></Column>
      <Column small={2}><h5>Gi or No Gi</h5></Column>
      <Column small={1}></Column>
    </Row>
)

export default TournamentListHeader
