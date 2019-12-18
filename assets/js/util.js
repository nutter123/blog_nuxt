/*
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-10-12 09:57:28
 * @LastEditors: nut
 * @LastEditTime: 2019-11-01 10:14:24
 */


export default {
    exportModule(name) {

        return modules;
    },

    //数组去重+转化
    ArraySet(array,func){
        let result = Array.from(new Set(array),func);
        return result;
    },
    //数组创建
    ArrayCreate(num,item){
        let result = new Array(num).fill(item);
        return result;
    },
    //数组求交集
    ArrayMix(arrA,arrB){
        let result = this.ArraySet(arrA).filter(item=> arrB.includes(item));
        return result;
    }
} 