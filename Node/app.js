import {add,pi} from './math.js';
//const demo=require('./math.js');//not require to add "type": "module" in package.js 
console.log(add(3,2));
console.log(pi);

// // console.log(demo.add(3,2));
// // console.log(demo.pi);

//==========default=======//

// import math from './math.js';
// console.log(math.add(3,2));
// console.log(math.pi);

//========== Alias =======//
// import {add as a,pi as p} from './math.js';
// console.log(a(3,2));
// console.log(p);

//========== Dynamic import =======//
// async function loadmath(){
//     const demo=await import("./math.js");
//     console.log(demo.add(3,2));
//     console.log(demo.pi);

// }
// loadmath();

// import  person,{greet} from './person.js';
// let per=new person("Diya");
// console.log(per.syaHello());
// console.log(greet("Jay"));

