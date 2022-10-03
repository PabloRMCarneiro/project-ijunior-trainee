import api from './Api';

function CreateSong (title, cover_image, artist, genre){

    return api.post('/songs', {
        title: title,
        cover_image: cover_image,
        artist_id: artist,
        genre : genre
    })
}

export default CreateSong ;