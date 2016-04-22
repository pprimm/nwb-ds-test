'use strict'

import React from 'react'
import dsClient from '../client'
import LightOnOffTypeContainer from './LightOnOff/LightOnOffTypeContainer'
import LightDimContainer from './LightDim/LightDimContainer'

export default class LightListContainer extends React.Component {
   constructor () {
      super()

      this.state = { lighstArr: [] }
      this.factoryList = {}
      this.factoryList['LightDim'] = React.createFactory( LightDimContainer )
      this.factoryList['LightOnOffType'] = React.createFactory( LightOnOffTypeContainer )
      this.createNewElement = this.createNewElement.bind(this)
      this.recordUpdate = this.recordUpdate.bind(this)
   }

   componentDidMount () {
      //console.log('LightListContainer::componentDidMount()')
      //console.log(this.refs)
      this.record = dsClient.record.getRecord( 'view/lights' )
      this.record.subscribe( this.recordUpdate )
   }

   componentWillUnmount () {
      //console.log('LightListContainer::componentWillUnmount()')
      this.record.discard()
   }

   recordUpdate ( newState ) {
      //console.log('LightListContainer::recordUpdate()')
      this.setState( newState );
   }

   createNewElement (item, index) {
      const factory = this.factoryList[item.ctrlType]
      if (typeof factory != 'undefined') {
         let itemProps = item.props;
         itemProps.key = index;
         return factory(itemProps)
      }
      return null
   }

   render () {
      const LightItems = this.state.lighstArr.map(this.createNewElement)
      return <div>{LightItems}</div>
  }
}
