import api from './Api'

function LoginApi (email, password){

    return api.post('/users/login', {
        email: email,
        password: password
    });
    
}

export default LoginApi;

