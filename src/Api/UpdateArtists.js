import api from './Api'

function UpdateArtists (id, name, nationality, image){
    
    api.put(`/artists/${id}`, {
        name: name,
        nationality: nationality,
        image: image,
    })
    .then();
}

export default UpdateArtists;