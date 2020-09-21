// import { obj } from './export_test'
// // a = 100;
// // a = 100;
// obj = { name1: 'Darren1' };
// console.log(obj);
// import exportDefaultTest from './export_default_test';
// // exportDefaultTest = 'Darren1';
// console.log(exportDefaultTest);
import { a } from "./mixed";
import b from "./mixed";
import * as all from "./mixed";
// 可以看看这里的all，{a:1,default:2}，加深对default的理解
console.log(all);
// 注意，这里的b其实是相当于 在这里var b= 2，是b文件自己的变量，可以随意赋值
// b = 1;
// // a是a文件的变量，不可修改，只能a文件自己改，以下这句会报错
// a = 333;
