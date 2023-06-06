// constuctor 작성 

function People(name,age) {
    this.name = name;
    this.age = age;

    this.get = function() {
        return this.name + this.age
    }
}

let u1 = new People("달님", 55);

console.log(u1);