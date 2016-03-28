'use strict'

import React from 'react'
import Slider from '../Slider'
import { Button } from 'react-bootstrap'

export default class LightDimType extends React.Component {
  constructor () {
    super()

    this.state = { sliderLock: false }
    this.sliderHandler = this.sliderHandler.bind(this)
    this.lockSlider = this.lockSlider.bind(this)
    this.unlockSlider = this.unlockSlider.bind(this)
    this._onHandler = this._onHandler.bind(this)
    this._offHandler = this._offHandler.bind(this)
  }

  sliderHandler (newValue) {
    this.props.containerHandler(newValue)
  }

  lockSlider () {
    this.setState({sliderLock: true})
  }

  unlockSlider () {
    this.setState({sliderLock: false})
  }

  _onHandler () {
    this.props.switchHandler('on')
  }

  _offHandler () {
    this.props.switchHandler('off')
  }
  render () {
    return <div className = 'container-slider'>
            <div className='top'>
              <div className='name'>{this.props.displayName}</div>
              <div className='percent'>{this.props.value}%</div>
            </div>
            <div className = 'bottom'>
              <div className = 'button button-left'>
                <Button bsStyle='primary' onClick = {this._offHandler} >OFF</Button>
              </div>
              <Slider className='slider'
                      value = {this.state.sliderLock ? undefined : this.props.value}
                      onChange = {this.sliderHandler}
                      onDragStart = {this.lockSlider}
                      onDragEnd = {this.unlockSlider}/>
              <div className='button button-right'>
                <Button bsStyle='primary' onClick = {this._onHandler}>ON</Button>
              </div>
            </div>
           </div>
  }
}
