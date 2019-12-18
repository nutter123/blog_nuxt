/*
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-04 14:27:31
 * @LastEditors: nut
 * @LastEditTime: 2019-11-06 10:51:36
 */
export default function ({ isHMR, app, store, route, params, error, redirect }) {
    if (isHMR) return;
    if (route.fullPath == '/') {
        return redirect('/home')
    }
}