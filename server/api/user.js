/*
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-01 15:42:36
 * @LastEditors: nut
 * @LastEditTime: 2019-11-01 16:13:03
 */

import axios from '@/plugins/axios'

export default {
    login(data) {
        return axios.request({
            url: '/login',
            method: 'POST',
            data,
            responseType: 'json'
        })
    }
}
