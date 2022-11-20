const logger = require('./singletonPattern')

const logFistTime = () => {
  logger.printLogCount()
  logger.log('Naim Islam')
}

logFistTime()