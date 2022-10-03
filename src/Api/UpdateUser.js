import api from './Api'

function UpdateUser (id, email, name, password){
    
    return api.put(`/users/${id}`, {
        name: name,
        email: email,
        password: password,
    });

}

export default UpdateUser;