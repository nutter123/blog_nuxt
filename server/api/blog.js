/*
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-01 15:42:36
 * @LastEditors: nut
 * @LastEditTime: 2019-11-06 13:47:20
 */
import axios from '@/plugins/axios'

export default {
    add(data) {
        return axios.request({
            url: '/blog',
            method: 'POST',
            data,
            responseType: 'json'
        })
    },
    getAll(data) {
        return axios.request({
            url: '/blog',
            method: 'GET',
            params: data
        })
    },
    getBlog() {
        return axios.request({
            url: '/blog/new',
            method: 'GET'
        })
    },
    getDetail(id) {
        return axios.request({
            url: `/blog/${id}`,
            method: 'GET'
        })
    },
    edit(id, data) {
        return axios.request({
            url: `/blog/${id}`,
            method: 'PUT',
            data: data
        })
    },
    delete(id) {
        return axios.request({
            url: `/blog/${id}`,
            method: 'DELETE'
        })
    },
}
