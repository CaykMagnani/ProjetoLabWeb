const Hapi = require("@Hapi/hapi");
const routes = require('./routes');

const server = Hapi.server({
    port: 5000,
    host: "0.0.0.0"
});

routes.forEach((path) => server.route(path))

module.exports = server;