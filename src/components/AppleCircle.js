'use strict'

import React from 'react'

export default class AppleCircle extends React.Component {
  constructor () {
    super()

    this._animateQuarters = this._animateQuarters.bind(this)
    this._animateCenter = this._animateCenter.bind(this)
    this._handleCircleClick = this._handleCircleClick.bind(this)
  }

  _animateQuarters (direction) {
    document.getElementById(direction).setAttribute('class', 'quarter-transition')
    setTimeout(function () {
      document.getElementById(direction).setAttribute('class', 'quarter-transition-back')
    }, 500)
  }

  _animateCenter () {
    document.getElementById('center').setAttribute('class', 'center-transition')
    setTimeout(function () {
      document.getElementById('center').setAttribute('class', 'center-transition-back')
    }, 500)
  }

  _handleCircleClick (direction) {
    if (direction === 'center') {
      this._animateCenter()
    } else {
      this._animateQuarters(direction)
    }
  }

  render () {
    return <div className='circle-container'>
            <svg width='100%' height='100%' viewBox='0 0 200 200' preserveAspectRatio='xMidYMin meet'>
              <g id='circle' transform='translate(100,100)'>
                <path onClick={this._handleCircleClick.bind(this, 'left')}
                      id='left'
                      d='M0 0-70 70A99 99 0 0 1-70-70Z' />
                <path onClick={this._handleCircleClick.bind(this, 'top')}
                      id='top'
                      d='M0 0-70-70A99 99 0 0 1 70-70Z' />
                <path onClick={this._handleCircleClick.bind(this, 'right')}
                      id='right'
                      d='M0 0 70-70A99 99 0 0 1 70 70Z' />
                <path onClick={this._handleCircleClick.bind(this, 'bottom')}
                      id='bottom'
                      d='M0 0 70 70A99 99 0 0 1-70 70Z' />
              </g>
              <polyline id='leftArrow'
                        fill='none'
                        stroke='#FFFFFF'
                        strokeWidth='1'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        points='30,120 10,100 30,80'/>
              <polyline id='rightArrow'
                        fill='none'
                        stroke='#FFFFFF'
                        strokeWidth='1'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        points='170,120 190,100 170,80'/>
              <polyline id='topArrow'
                        fill='none'
                        stroke='#FFFFFF'
                        strokeWidth='1'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        points='120,30 100,10 80,30'/>
              <polyline id='bottomArrow'
                        fill='none'
                        stroke='#FFFFFF'
                        strokeWidth='1'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        points='120,170 100,190 80,170'/>
              <circle onClick={this._handleCircleClick.bind(this, 'center')}
                      id='center'
                      cx='100'
                      cy='100'
                      r='30'
                      stroke='#FFFFFF'
                      strokeWidth='1'
                      fill='#3B8686' />
            </svg>
           </div>
  }
}
