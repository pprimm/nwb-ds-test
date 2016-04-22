'use strict'

import React from 'react'
import dsClient from '../../client'
import LightDim from './LightDim'

export default class LightDimContainer extends React.Component {
   constructor () {
      super()

      this.state = {value: 0}
      this.levelHandler = this.levelHandler.bind(this)
      this.switchHandler = this.switchHandler.bind(this)
      this.updateLevel = this.updateLevel.bind(this)
   }

   componentDidMount () {
      //console.log('LightDimContainer::componentDidMount()')
      //console.log(this.refs)
      this.levelTopic = this.props.recordName + '/level'
      this.cmdTopic = this.props.recordName + '/cmd'
      this.record = dsClient.record.getRecord( this.props.recordName )
      this.record.subscribe( 'level', this.updateLevel )
   }

   componentWillUnmount () {
      //console.log('LightDimContainer::componentWillUnmount()')
      this.record.discard()
   }

   updateLevel ( value ) {
      //console.log('level: ' + value)
      this.setState({value: parseInt(value.toString(), 10)})
   }

   levelHandler (data) {
      dsClient.event.emit( this.levelTopic, data )
   }

   switchHandler (data) {
      //console.log(this)
      dsClient.event.emit( this.cmdTopic, data )
   }

   render () {
      return <LightDim switchHandler = {this.switchHandler}
                           containerHandler = {this.levelHandler}
                           displayName = {this.props.displayName}
                           value={this.state.value}/>
   }
}
LightDimContainer.propTypes = {
   displayName: React.PropTypes.string,
   recordName: React.PropTypes.string.isRequired
}
LightDimContainer.defaultProps = { displayName: 'LightDim' };
