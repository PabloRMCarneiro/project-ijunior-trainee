import api from './Api'

const email = 'admin@gmail.com';
const password = '123456';

function LoginApi (){

    api.post('/users/login', {
        email: email,
        password: password
    })
    .then();
}

export default LoginApi;

