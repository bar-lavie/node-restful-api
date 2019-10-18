const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('messageLogged', {
            id: 1,
            url: url
        })
    }
}

module.exports = Logger;



// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged', (arg) => {
//     console.log('message logged', arg)
// })

// logger.log('message')