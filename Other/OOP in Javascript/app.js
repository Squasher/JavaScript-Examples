class Data {

    constructor(fullName, age){
        this.fullName = fullName;
        this.age = age;
    }
}


class Elements extends Data {

    static createUl(obj = new Data(fullName, age)){

        const main = document.querySelector('#main');
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        main.className = 'p-3 bg-light border border-info border-3 container mt-3';
        li.textContent = `${obj.fullName}  ${obj.age}`;
        li.className = 'p-3 bg-info text-white';
        ul.appendChild(li);
        main.appendChild(ul);
    }

}

let inst1 = new Data("Korango", 26);
let inst2 = new Data("Borango", 16);
let inst3 = new Data("Blanka", 36);
let inst4 = new Data("Sakura", 18);
let inst5 = new Data("Lana", 17);
let inst6 = new Data("Mikey", 44);

let myArr = [
    inst1,
    inst2,
    inst3,
    inst4,
    inst5,
    inst6
]

myArr.forEach(function(liElement){
    Elements.createUl(liElement);
});