import api from './Api';

function CreateArtists(name, nationality, image){

    api.post('/artists', {
        name: name,
        nationality: nationality,
        image: image
    }).then();
}

export default CreateArtists;