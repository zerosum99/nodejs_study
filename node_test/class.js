// 클래스


class User {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getUser() {
        return this.name + " " + this.age;
    }
}


const u1 = new User("가을이",22);

console.log(u1);
console.log(u1.getUser());