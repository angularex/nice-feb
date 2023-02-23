/* 
let commonman = {
    title : "Bruce"
};
let addPower = function(power:number){
    return function(hero:any){
        return {
            title : hero.title,
            power : power
        }
    }
};
commonman = addPower(5)(commonman);
console.log(commonman); 
*/


let AddPower = function(config:any){
    return function(targetClass:any){
        return class {
            title = new targetClass().title;
            power = config.power;
        }
    }
};
@AddPower({
    power : 5
})
class Commonman {
    title = "Bruce";
};
console.log(new Commonman());