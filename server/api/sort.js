/*
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-01 15:42:36
 * @LastEditors: nut
 * @LastEditTime: 2019-11-06 09:56:57
 */
import axios from '@/plugins/axios'

export default {
    add(data) {
        return axios.request({
            url: '/sort',
            method: 'POST',
            data,
            responseType: 'json'
        })
    },
    getOption() {
        return axios.request({
            method: 'GET',
            url: '/sort/new'
        })
    },
    getAll(data) {
        return axios.request({
            url: '/sort',
            method: 'GET',
            params: data
        })
    },
    edit(id, data) {
        return axios.request({
            url: `/sort/${id}`,
            method: 'PUT',
            data: data
        })
    },
    delete(id) {
        return axios.request({
            url: `/sort/${id}`,
            method: 'DELETE'
        })
    },
}
