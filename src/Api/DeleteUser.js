import api from './Api'

function DeleteUser (id){
    
    api.delete(`/users/${id}`, {
    })
    .then();
}

export default DeleteUser;