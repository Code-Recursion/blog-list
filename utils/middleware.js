const logger = require('./logger')

const requestLogger = (request, response, next) => {
  logger.info('\n-------')
  logger.info('Method', request.method)
  logger.info('Path', request.path)
  logger.info('Body', JSON.stringify(request.body))
  logger.info('-------\n')
  next()
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unkown endpoint' })
}

module.exports = {
    requestLogger,
    errorHandler,
    unknownEndpoint
}