/*
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-01 15:42:36
 * @LastEditors: nut
 * @LastEditTime: 2019-11-01 16:02:07
 */
import axios from '@/plugins/axios'

export default {
    add(data) {
        return axios.request({
            url: '/label',
            method: 'POST',
            data,
            responseType: 'json'
        })
    },
    getAll(data) {
        return axios.request({
            url: '/label',
            method: 'GET',
            params: data
        })
    },
    getOption() {
        return axios.request({
            url: '/label/new',
            method: 'GET'
        })
    },
    edit(id, data) {
        return axios.request({
            url: `/label/${id}`,
            method: 'PUT',
            data: data
        })
    },
    delete(id) {
        return axios.request({
            url: `/label/${id}`,
            method: 'DELETE'
        })
    },
}
