const { createLogger, transports, format } = require('winston');



const logger = createLogger({
    transports: [
        new transports.Console(),
        new transports.File({
            level: 'warn',
            filename: 'logsWarnings.log'
        }),
        new transports.File({
            level: 'error',
            filename: 'logsErrors.log'
        }),
        // new transports.File({
        //     level: 'info',
        //     filename: 'logsInfo.log'
        // }),
        new transports.File({
            level: 'http',
            filename: 'logsHttp.log'
        }),
        // new transports.MongoDB({
        //     db: process.env.mongoURL,
        //     collection: 'logs'
        // })
    ],
    format: format.combine(
        format.json(),
        format.timestamp(),
        format.prettyPrint(),
        format.metadata()
    )
});

module.exports = logger;