const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const studentRegister = (data) => {
  console.log(`Welcome to our app ${data.name}.`);
};
eventEmitter.on('register', studentRegister);
eventEmitter.emit('register', { name: 'Andrea Gjikovska' });
