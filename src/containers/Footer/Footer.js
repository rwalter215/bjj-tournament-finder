import React from 'react'
import { Column, Row } from 'react-foundation';
import './Footer.css'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Row className='display footer'>
        <Column small={3} centerOnSmall>
          <i class="fa fa-copyright" aria-hidden="true"></i>
          2017 All Rights Reserved
        </Column>
      </Row>
    )
  }
}
