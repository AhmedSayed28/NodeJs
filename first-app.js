let name = "ahmed";
let age = 26;

function printInfo(){
    return "Name: " + name + " Age: " + age
}

console.log(printInfo());

const add = (a,b) => a+b;

console.log(add(2,2));

// Objects

const person = {
    name: "ahmed",
    age: 26,
    address: "Cairo"
}

const printName = ({ name , age , address }) => {
    console.log(name);
    console.log(age);
    console.log(address);
}
printName(person);



// const names = ["ahmed" , "Mohamed"];

// const copy1 = names;
// console.log(copy1);

// const copy2 = names.slice();
// console.log(copy2);

// const copy3 = [...names];
// console.log(copy3);
