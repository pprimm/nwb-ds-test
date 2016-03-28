'use strict'

import React from 'react'
import { PageHeader, Button, Glyphicon } from 'react-bootstrap'
import history from '../history'
import MasterLightContainer from '../components/MasterLightContainer'

export default class LightsPage extends React.Component {
  constructor () {
    super()
    this._clickBack = this._clickBack.bind(this)
  }

  _clickBack () {
    history.goBack()
  }

  render () {
    return <div className = 'container-height'>
             <PageHeader className = 'header'>
              <Button bsStyle='link'
                      bsSize='small'
                      onClick={this._clickBack}>
                        <Glyphicon className ='icon-back'
                                   glyph='chevron-left'/>
              </Button>
              Lights
             </PageHeader>
             <MasterLightContainer/>
           </div>
  }
}
