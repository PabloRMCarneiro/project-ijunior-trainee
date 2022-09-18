import api from './Api'

function DeleteArtists (id){
    
    api.delete(`/artists/${id}`, {
    })
    .then();
}

export default DeleteArtists;