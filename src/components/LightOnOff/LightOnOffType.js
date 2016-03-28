'use strict'

import React from 'react'
import { Button } from 'react-bootstrap'

export default class LightOnOffType extends React.Component {
  constructor () {
    super()

    this.handleButtons = this.handleButtons.bind(this)
    this._renderButtons = this._renderButtons.bind(this)
  }

  /*static propTypes = {
    displayName: React.PropTypes.string.isRequired,
    containerHandler: React.PropTypes.func.isRequired
}*/

  handleButtons (type) {
    if (type === 'on') {
      this.props.containerHandler(1)
    }
    if (type === 'off') {
      this.props.containerHandler(0)
    }
  }

  _renderButtons () {
    //No disabled = true in react bootstrap buttons, hence this function
    if(this.props.value === 0){
      return <div className ='button-group'>

              <Button className = 'on-off-button'
                      bsStyle='primary'
                      onClick = {this.handleButtons.bind(this, 'on')}>
                On
              </Button>
              <Button className = 'on-off-button'
                      bsStyle='primary'
                      onClick = {this.handleButtons.bind(this, 'off')}
                      disabled>
                Off
              </Button>
             </div>

    } else {
      return <div className ='button-group'>

              <Button className = 'on-off-button'
                      bsStyle='primary'
                      onClick = {this.handleButtons.bind(this, 'on')}
                      disabled>
                On
              </Button>
              <Button className = 'on-off-button'
                      bsStyle='primary'
                      onClick = {this.handleButtons.bind(this, 'off')}>
                Off
              </Button>
             </div>
    }
  }

  render () {
    return <div className = 'on-off-container'>
            <div className ='name'>{this.props.displayName}</div>
            <div className ='button-group'>
              {this._renderButtons.call(this)}
            </div>
           </div>
  }
}
