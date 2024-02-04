import userApi from '../api/userApi'

// const ENDPOINT = 

const create = async (data) => {
    const url = '/users/register';
    return userApi.post(url, data).then((res) => {
        return res;
    });
};

const login = async (data) => {
  const url = '/users/login';
  return userApi.post(url, data).then((res) => {
    return res;
  })
}


const authService = {
    create,
    login
}
export default authService;




