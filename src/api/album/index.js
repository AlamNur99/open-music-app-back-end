const AlbumcHandler = require("./handler");
const routes = require("./routes");

module.exports = {
    name: 'albums',
    version: '1.0.0',
    register: async (server, {
        service,
        validator
    }) => {
        const albumHandler = new AlbumcHandler(service, validator);
        server.route(routes(albumHandler));
    },
};