const { sampleHandler } = require('./handlers/routeHandlers/sampleHandlers');
const { notFoundHandlers } = require('./handlers/routeHandlers/notFoundHandlers');

const routes = {
    sample : sampleHandler
}

module.exports = routes