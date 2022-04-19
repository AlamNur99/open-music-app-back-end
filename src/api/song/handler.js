const ClientError = require("../../exceptions/ClientError");

class SongHandler {
    constructor(service, validator) {
        this._service = service;
        this._validator = validator;

        this.postSongHandler = this.postSongHandler.bind(this);
        this.getSongshandler = this.getSongshandler.bind(this);
        this.getSongByIdHandler = this.getSongByIdHandler.bind(this);
        this.putSongByIdHandler = this.putSongByIdHandler.bind(this);
        this.deleteSongByIdHandler = this.deleteSongByIdHandler.bind(this);
    }

    async postSongHandler(request, h) {
        this._validator.validateSongPayload(request.payload);
        const {
            title = 'untiled',
                year,
                genre,
                performer,
                duration,
                albumId
        } = request.payload;
        const songId = await this._service.addSong({
            title,
            year,
            genre,
            performer,
            duration,
            albumId
        });
        const response = h.response({
            status: 'success',
            message: 'Lagu berhasil ditambahkan',
            data: {
                songId,
            },
        });

        response.code(201);
        return response;
    }

    async getSongshandler() {
        const songs = await this._service.getSongs();
        return {
            status: 'success',
            data: {
                songs
            }
        }
    }

    async getSongByIdHandler(request, h) {
        const {
            id
        } = request.params;
        const song = await this._service.getSongById(id);
        return {
            status: 'success',
            data: {
                song,
            },
        };
    }

    async putSongByIdHandler(request, h) {
        this._validator.validateSongPayload(request.payload);
        const {
            id
        } = request.params;
        await this._service.editSongById(id, request.payload);

        return {
            status: 'success',
            message: 'Lagu berhasil diperbarui',
        };
    }

    async deleteSongByIdHandler(request, h) {
        const {
            id
        } = request.params;
        await this._service.deleteSongById(id);

        return {
            status: 'success',
            message: 'Lagu berhasil dihapus',
        };
    }
}

module.exports = SongHandler;