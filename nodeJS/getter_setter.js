class Person {
    constructor(name, age) {
        this._name = name.toString();
        this._age = age;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set age(age) {
        if (age < 0) {
            console.log("나이는 음수일 수 없습니다.");
            return;
        }
        this._age = age;
    }

    get age() {
        return this._age;
    }
}


let person1 = new Person("sdsd", -1)
console.log(person1.name)
console.log(person1.age)