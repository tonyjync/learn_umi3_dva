import { request } from 'umi'

export const getUserList = async () => {
    return request('http://public-api-v1.aspirantzhang.com/users', {
        method: 'get'
    })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
}
