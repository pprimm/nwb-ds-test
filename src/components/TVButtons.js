'use strict'

import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'

export default class TVButtons extends React.Component {
  constructor () {
    super()
  }

  render () {
    return <div className='tv-container'>
             <div className='tv-centered-inner'>
               <Button bsStyle='primary' bsSize='large'>
                Menu
               </Button>
               <Button bsStyle='primary' bsSize='large' >
                 <Glyphicon glyph='play'/>
                 <Glyphicon glyph='pause'/>
               </Button>
            </div>
          </div>
  }
}
