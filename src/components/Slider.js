'use strict'

import React from 'react'

export default class Slider extends React.Component {
  constructor () {
    super()

    this.state = { dragged: false }
    this._mouseDownHandler = this._mouseDownHandler.bind(this)
    this._mouseUpHandler = this._mouseUpHandler.bind(this)
    this._onChange = this._onChange.bind(this);
  }

  _mouseDownHandler () {
    this.setState({dragged: true})
    if (this.props.onDragStart) {
      this.props.onDragStart()
    }
  }

  _mouseUpHandler () {
    this.setState({dragged: false})
    if (this.props.onDragEnd) {
      this.props.onDragEnd()
    }
  }

  _onChange (e) {
    if(this.props.onChange){
      this.props.onChange(e.target.value)
    }
  }

  render () {
    return <div className = 'slider' onMouseDown = {this._mouseDownHandler} onMouseUp = {this._mouseUpHandler}>
             <input type='range'
                    value = {this.props.value}
                    onChange = {this._onChange}/>
          </div>
  }
}
