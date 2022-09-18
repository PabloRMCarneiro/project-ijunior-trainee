import api from './Api'


function LoginApi (){

    api.post('/users/logout')
    .then();
}

export default LoginApi;

