'use strict'

import deepstream from 'deepstream.io-client-js';

//const userUid = ds.getUid();
const dsOptions = {
   transports: ['websocket'],
   rememberUpgrade: true
}

let dsClient = deepstream( '10.10.101.35:6020' ,dsOptions ).login({ user: 'webSocketClient', password: 'sesame' });

dsClient.on('error', function(err) {
   console.warn(err);
   return;
});

dsClient.on('connectionStateChanged', function(state) {
   console.log('# Connection State: ' + state);
});

export default dsClient
