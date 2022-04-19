const mapAlbumsDBToModel = ({
    id,
    name,
    year,
}) => ({
    id,
    name,
    year,
});

const mapSongsDBToModel = ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    album_id,
}) => ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId: album_id,
});

module.exports = {
    mapAlbumsDBToModel,
    mapSongsDBToModel
};