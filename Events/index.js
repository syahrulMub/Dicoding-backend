const { EventEmitter } = require('events');
const myEventEmitter = new EventEmitter();
const birthDayEventListener = ({ name }) => {
    console.log(`Happy birthday ${name}!`);
}

myEventEmitter.on('birthday', birthDayEventListener);


myEventEmitter.emit('birthday', { name: 'Syahrul' });