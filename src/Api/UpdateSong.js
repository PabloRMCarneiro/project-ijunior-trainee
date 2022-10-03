import api from './Api'

function UpdateSong (id, title, cover_image, artist, genre){
    
    return api.put(`/songs/${id}`, {
        title: title,
        cover_image: cover_image,
        artist_id: artist,
        genre : genre
    });

}

export default UpdateSong;