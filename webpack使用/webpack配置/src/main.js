//使用commonjs模块话规范
const {add,mul} = require('./multalll.JS')
console.log(add(20,30))
console.log(mul(20,30))


//es6模块话的规划
import {name,age,height} from './info'

console.log(name);
console.log(age);
console.log(height);