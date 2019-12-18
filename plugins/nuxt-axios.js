/*
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-06 10:20:25
 * @LastEditors: nut
 * @LastEditTime: 2019-11-06 10:36:25
 */
export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        config.url = 'http://127.0.0.1:7001' + config.url;
        console.log('Making request to ' + config.url)
    })
    $axios.onResponse(response => {
        let resData = response.data;
        if (resData.code === '000') {
            return response.data
        }else{
            console.log(resData)
            return ''
        }
    })
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
}