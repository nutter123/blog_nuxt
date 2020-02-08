/*
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-12-19 10:57:04
 * @LastEditors  : nut
 * @LastEditTime : 2019-12-19 10:58:03
 */
// 计算时间间隔
export const getTimeInter =  function(start, end, format) {
    const formatArr = ['D', 'h', 'm', 's'];
    let startNum = +new Date(start), endNum = +new Date(end);
    let num = endNum - startNum - 28800000;
    let returnArr = [];
    if (num) {
        let date = new Date(num);
        returnArr.push(parseInt(num / 1000 / 60 / 60 / 24));
        returnArr.push(formatNumber(date.getHours()));
        returnArr.push(formatNumber(date.getMinutes()));
        returnArr.push(formatNumber(date.getSeconds()));
        if (returnArr[0] <= 0) {
            format = 'h:m:s'
        }
        for (let i in returnArr) {
            format = format.replace(formatArr[i], returnArr[i]);
        }
        return format;
    } else {
        return '--:--'
    }
}

