import api from './Api'


function LoginApi (){

    return api.post('/users/logout');
}

export default LoginApi;

