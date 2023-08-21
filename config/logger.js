const winston = require('winston')


const enumerateErrorFormat  = winston.format((info)=>{
    if(info instanceof Error){
        Object.assign(info , {message: info.stack})
    }

    return info
})

const logger = winston.createLogger({
    level: process.env.APP_ENV === 'dev' ? 'debug' : 'info',
    format: winston.format.combine(
        enumerateErrorFormat(),
        process.env.APP_ENV === 'dev' ? winston.format.colorize() : winston.format.uncolorize(),
        winston.format.splat(),
        winston.format.printf(({level, message})=> `${level}: ${message}`)
    )
})

module.exports = logger