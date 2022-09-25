import api from './Api'

function DeleteUsers (id){
    
    api.delete(`/users/${id}`, {
    })
    .then();
}

export default DeleteUsers;