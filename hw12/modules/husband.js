/*
Написать в Node JS класс Husband в файле husband.js, 
у которого будут внутренние переменные (скрытые от внешнего кода):
.
- зарплата (тип number)
- друзья (в виде массива имён)
- трезвый (тип bulean)
.
Реализовать "Паттерн Модуль" и добавить экспорт функций:
- получитьЗарплату
- спроситьКтоДрузья
- узнатьТрезвыйЛи

*/

class Husband {

    constructor() {
        this.salary = 0;
        this.friends = [];
        this.drunk = false;
    }
    getSalary() {
        return `Actual salary is ${this.salary}.\n`;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    
    getFriends()  {
        // let list = "";
        // for (let item of this.friends) {
        //     list += String(item) + " ";
        // }
        // return `Actual the friend list contains ${list}.\n`;
        return `Actual the friend list contains ${this.friends}.\n`;
    }
    setFriends(friends)  {
        this.friends = friends.slice();
    }
    
    isDrunk() {
        return `Is drunk? -- ${this.drunk}\n`;
    }
    setDrunk(drunk) {
        this.drunk = drunk;
    }
    
}

exports.NewHusband = new Husband();
