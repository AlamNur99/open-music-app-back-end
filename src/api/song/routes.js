const routes = (handler) => [{
        method: 'POST',
        path: '/songs',
        handler: handler.postSongHandler,
    },
    {
        method: 'GET',
        path: '/songs',
        handler: handler.getSongshandler,
    },
    {
        method: 'GET',
        path: '/song/{id}',
        handler: handler.getSongByIdHandler,
    },
    {
        method: 'PUT',
        path: '/song/{id}',
        handler: handler.putSongByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/song/{id}',
        handler: handler.deleteSongByIdHandler,
    },
];

module.exports = routes;