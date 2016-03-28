'use strict'

import React from 'react'
import dsClient from '../../client'
import LightOnOffType from './LightOnOffType'

export default class LighOnOffTypeContainer extends React.Component {
   constructor () {
      super()

      this.state = {value: 0}
      this.childUpdate = this.childUpdate.bind(this)
   }

   componentDidMount () {
      this.cmdTopic = this.props.recordName + '/state'
      this.record = dsClient.record.getRecord( this.props.recordName )
      var self = this;
      this.record.subscribe( 'state', function( value ) {
         //console.log(self.props.recordName + ' = ' + value)
         self.setState({value: parseInt(value.toString(), 10)})
      })
   }

   componentWillUnmount () {
      this.record.discard()
   }

   childUpdate (data) {
      dsClient.event.emit( this.cmdTopic, data )
   }

   render () {
      return <LightOnOffType containerHandler = {this.childUpdate}
                             displayName = {this.props.displayName}
                             value = {this.state.value} />
   }
}
