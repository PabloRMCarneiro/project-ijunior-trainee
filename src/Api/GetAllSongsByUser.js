import api from './Api';

function GetAllSongsByUser(id) {

  return api.get(`/users-songs/users/${id}`);

}

export default GetAllSongsByUser;