import api from './Api'


function CreateUser (nome, email, password){

    const body = {
        name: nome,
        email: email,
        password: password,
        role: 'user'
    }
    
    console.log(body)
    return api.post('/users', body);
}

export default CreateUser;
