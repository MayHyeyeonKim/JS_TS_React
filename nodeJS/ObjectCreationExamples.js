// 클래스를 사용하여 객체를 만드는 예제
class UserClass {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let user1 = new UserClass("Chuchu",33);
console.log(user1);


// 생성자 함수를 사용하여 객체를 만드는 예제
function User(name, age){
    this.name =name;
    this.age=age;
}

let user2 = new User("Chuya", 35);
console.log(user2)