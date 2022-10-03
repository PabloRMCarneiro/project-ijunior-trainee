import api from './Api'

function DeleteSong (id){
    
    api.delete(`/songs/${id}`, {
    })
    .then();
}

export default DeleteSong;