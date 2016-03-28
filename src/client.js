'use strict'

import deepstream from 'deepstream.io-client-js';
let dsClient = deepstream( 'localhost:6020' ).login({ user: 'LisaA', password: 'sesame' });

export default dsClient
