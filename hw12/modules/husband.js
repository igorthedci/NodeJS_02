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

    let salary = 0;
    let friends = [];
    let drunk = false;
    // constructor() {
    // }

    getSalary() {
        return `Actual salary is ${this.salary}.\n`;
    }

    addSalary(increment = 0.0) {
        this.salary += increment;
        return `Actual salary is ${this.salary}.\n`;
    }
    
    getFriends()  {
        // let list = "";
        // for (let item of this.friends) {
        //     list += String(item) + " ";
        // }
        // return `Actual the friend list contains ${list}.\n`;
        return `Actual the friend list contains ${this.friends}.\n`;
    }
    
    isDrunk() {
        return `Is drunk? -- ${this.drunk}\n`;
    }
    
}

exports.NewHusband = new Husband();
