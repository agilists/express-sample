
const log4js = require('log4js');

log4js.configure({
    appenders: {
        access: {
            type: 'stdout',
            layout: {
                type: 'basic'
            },
        },
        system: {
            type: 'stdout',
            layout: {
                type: 'basic'
            },
        },
    },
    categories: {
        default: {
            appenders: [
                'access',
                'system',
            ],
            level: 'debug',
        },
    },
});

module.exports = {
    system: log4js.getLogger('system'),
    express: log4js.connectLogger(
        log4js.getLogger('access'),
        {
            level: log4js.levels.INFO, 
            format: ':remote-addr - ":method :url HTTP/:http-version" :status :res[content-length] :response-timems ":referrer" ":user-agent"',
        }
    )
};
