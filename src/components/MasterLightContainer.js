'use strict'

import React from 'react'
import LightOnOffTypeContainer from './LightOnOff/LightOnOffTypeContainer'
import LightDimTypeContainer from './LightDim/LightDimTypeContainer'

export default class MasterLightContainer extends React.Component {
   constructor () {
      super()

      this.state = {
         lighstArr: [
            {
               ctrlType: 'Unknown'
            }, {
               ctrlType: 'LightDimType',
               props: {
                  displayName: 'Family Ceiling',
                  recordName: 'lights/ceiling'
               }
            }, {
               ctrlType: 'LightOnOffType',
               props: {
                  displayName: 'Family Lamp',
                  recordName: 'lights/lamp'
               }
            }
         ]
      }
      this.factoryList = {}
      this.factoryList['LightDimType'] = React.createFactory( LightDimTypeContainer )
      this.factoryList['LightOnOffType'] = React.createFactory( LightOnOffTypeContainer )
      this.createNewElement = this.createNewElement.bind(this)
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
