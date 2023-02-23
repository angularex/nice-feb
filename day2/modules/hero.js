// import { Pson } from "./person.js"; 
// import { Person as Pson } from "./person.js"; 
import nice from "./person.js"; 

// class Hero extends Pson{
class Hero extends nice{
    static version = 101;
    title = "default";
    firstname = "default";
    lastname = "default";
    #mission = "my secret mission";
    constructor(htitle, hfname, hlname,hpower=0){
       super(hpower);
       this.title = htitle;
       this.firstname = hfname;
       this.lastname = hlname;
    };
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get mission(){
        return this.#mission;
    }
    set mission(nmission){
        this.#mission = nmission;
    }
};

export { Hero }