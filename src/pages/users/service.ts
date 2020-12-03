import { request } from 'umi'
import { extend } from 'umi-request';
import { message } from 'antd'

const errorHandler = function (error) {
    if (error.response) {
        // 请求已发送但服务端返回状态码非 2xx 的响应
        if (error.response.status >= 400) {
            message.error(error.data.message ? error.data.message : error.data);
        }
    } else {
        // 请求初始化时出错或者没有响应返回的异常
        message.error('网络异常');
    }

    // throw error; // 如果throw. 错误将继续抛出.

    // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
    // return {some: 'data'};
};

const extendRequest = extend({ errorHandler });


export const getUserList = async () => {
    return extendRequest('http://public-api-v1.aspirantzhang.com/users', {
        method: 'get'
    })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return false;
        });
}
export const editUser = async ({ id, values }) => {
    return extendRequest(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
        method: 'put',
        data: values
    })
        .then(function (response) {
            return true
        })
        .catch(function (error) {
            return false;
        });
}

export const deleteUser = async ({ id }) => {
    return extendRequest(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
        method: 'delete'
    })
        .then(function (response) {
            return true
        })
        .catch(function (error) {
            return false;
        });
}

export const addUser = async ({ values }) => {
    return extendRequest(`http://public-api-v1.aspirantzhang.com/users`, {
        method: 'post',
        data: values
    })
        .then(function (response) {
            return true
        })
        .catch(function (error) {
            return false;
        });
}
