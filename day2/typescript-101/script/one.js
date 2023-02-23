"use strict";
let message = "welcome to your life !!!";
let val = 10;
// let heroes:Array<string> = ['ironman','antman','hulk','thor'];
// let heroes:string[] = ['ironman','antman','hulk','thor'];
// let prop:string|string[]|boolean|number = 444;
let prop = 444;
for (let i = 0; i < val; i++) {
    console.log(i, message);
}
/*
function adder(num1:number,num2:number){
    return "Total is " + num1 + num2;
};
*/
/*
function adder(num1:number,num2:number, num3?:number):number{
    return num1 + num2 + num3;
};
*/
/*
function adder(num1:number,num2:number, num3:number = 0 ):number{
    return num1 + num2 + num3;
};
*/
function adder(num1, num2, num3 = 0) {
    console.log(num1 + num2 + num3);
}
;
adder(5, 6, 7);
