require('dotenv').config();

const Hapi = require('@hapi/hapi');
const albums = require('./api/album');
const songs = require('./api/song');
const AlbumService = require('./services/postgres/AlbumService');
const SongService = require('./services/postgres/SongService');
const AlbumValidator = require('./validator/album');
const SongValidator = require('./validator/song');

const init = async () => {
    const albumService = new AlbumService();
    const songService = new SongService();
    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST,
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    await server.register([{
        plugin: albums,
        options: {
            service: albumService,
            validator: AlbumValidator,
        },
    }, {
        plugin: songs,
        options: {
            service: songService,
            validator: SongValidator
        }
    }]);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();