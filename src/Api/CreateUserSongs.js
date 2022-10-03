import api from './Api';

function CreateUserSongs (id){

    return api.post(`/users-songs/${id}`)
}

export default CreateUserSongs ;