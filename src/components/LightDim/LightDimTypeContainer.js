'use strict'

import React from 'react'
import dsClient from '../../client'
import LightDimType from './LightDimType'

export default class LightDimTypeContainer extends React.Component {
   constructor () {
      super()

      this.state = {value: 0}
      this.levelHandler = this.levelHandler.bind(this)
      this.switchHandler = this.switchHandler.bind(this)
   }

   componentDidMount () {
      this.levelTopic = this.props.recordName + '/level'
      this.cmdTopic = this.props.recordName + '/cmd'
      this.record = dsClient.record.getRecord( this.props.recordName )
      var self = this;
      this.record.subscribe( 'level', function( value ) {
         self.setState({value: parseInt(value.toString(), 10)})
      })
   }

   componentWillUnmount () {
      this.record.discard()
   }

   levelHandler (data) {
      dsClient.event.emit( this.levelTopic, data )
   }

   switchHandler (data) {
      dsClient.event.emit( this.cmdTopic, data )
   }

   render () {
      return <LightDimType switchHandler = {this.switchHandler}
                           containerHandler = {this.levelHandler}
                           displayName = {this.props.displayName}
                           value={this.state.value}/>
   }

}
