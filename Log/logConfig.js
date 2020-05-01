
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { Product: 'portfolio' },
    transports: [
        new winston.transports.File({ filename: 'portfolio.log' })
    ]
});

module.exports.logger = logger;
