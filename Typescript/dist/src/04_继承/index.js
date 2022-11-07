"use strict";
function Parent(firstName) {
    this.firstName = firstName;
}
Parent.prototype.intro = function () {
    console.log("my firstname is zhang");
};
function Son(name_, age_) {
    console.log(name_ + age_ + "son");
}
Son.prototype = new Parent("zhang");
