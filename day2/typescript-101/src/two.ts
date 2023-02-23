/* 
class Person{
    power:number = 0;
    constructor(hpow:number){
        this.power = hpow;
    }
}
 */
interface IPerson{
    power : number;
    score : number;
};

class Person implements IPerson{
    score: number = 1;
    constructor(public power:number){}
};

interface IHero{
    title : string;
    firstname : string;
    lastname : string;
    fullname():string;
};

class Hero extends Person implements IHero {
    static version:number = 101;
    private hmission:string = "my secret mission";
    constructor( public title:string, public firstname:string, public lastname:string, hpower=0){
       super(hpower);
    };
    fullname():string{
        return this.firstname+" "+this.lastname;
    }
    get mission():string{
        return this.hmission;
    }
    set mission(nmission:string){
        this.hmission = nmission;
    }
};