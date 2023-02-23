"use strict";
;
class Person {
    constructor(power) {
        this.power = power;
        this.score = 1;
    }
}
;
;
class Hero extends Person {
    constructor(title, firstname, lastname, hpower = 0) {
        super(hpower);
        this.title = title;
        this.firstname = firstname;
        this.lastname = lastname;
        this.hmission = "my secret mission";
    }
    ;
    fullname() {
        return this.firstname + " " + this.lastname;
    }
    get mission() {
        return this.hmission;
    }
    set mission(nmission) {
        this.hmission = nmission;
    }
}
Hero.version = 101;
;
