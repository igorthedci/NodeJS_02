/*
Написать в Node JS класс Husband в файле husband.js, 
у которого будут внутренние переменные (скрытые от внешнего кода):
.
- зарплата (тип number)
- друзья (в виде массива имён)
- трезвый (тип boolean)
.
Реализовать "Паттерн Модуль" и добавить экспорт функций:
- получитьЗарплату
- спроситьКтоДрузья
- узнатьТрезвыйЛи

*/

class Husband {

    constructor(name) {
        let salary = 0;
        let friends = [];
        let drunk = false;
    
        // this.setName = function(name) { _name = name; }
        // this.getSa = function() { return _name; }
        this.name = name;

        this.getStatus = () => {
            return `Status:: name=${name}, drunk=${drunk}, salary=${salary}, friends=${friends}.`;
        }
        
        this.getSalary = () => {
            return `Actual salary is ${salary}.`;
        }

        this.addSalary = (increment=0.0) => {
            salary += increment;
            return `Actual salary is ${salary}.`;
        }

        this.getFriends = () => {
            return `Actual the friend list contains ${friends}.`;
        }
        
        this.isDrunk = () => {
            return `Is drunk? -- ${drunk}\n`;
        }
    
        this.workday = () => {
            drunk = false;
            salary += 10;
        }

        this.weekend = (guest='') => {
            drunk = true;
            friends.push(guest);
        }    
    }
}

module.exports.Husband = Husband;
