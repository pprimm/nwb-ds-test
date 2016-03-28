'use strict'

import React from 'react'
import LightOnOffTypeContainer from './LightOnOff/LightOnOffTypeContainer'
import LightDimTypeContainer from './LightDim/LightDimTypeContainer'

export default class MasterLightContainer extends React.Component {
  constructor () {
    super()

    this.state = {lighstArr: [{
      ctrlType: 'lightDimType',
      displayName: 'Family Ceiling',
      recordName: 'lights/ceiling'
    }, {
      ctrlType: 'lighOnOffType',
      displayName: 'Family Lamp',
      recordName: 'lights/lamp'
    }]}
  }

  render () {
    return <div>
            {this.state.lighstArr.map(function (curVal, index) {
              switch (curVal.ctrlType) {
                case 'lightDimType':
                  return <LightDimTypeContainer displayName = {curVal.displayName}
                                                recordName = {curVal.recordName}
                                                key = {index}/>
                case 'lighOnOffType':
                  return <LightOnOffTypeContainer displayName = {curVal.displayName}
                                                  recordName = {curVal.recordName}
                                                  key = {index} />
              }
            })}
           </div>
  }
}
