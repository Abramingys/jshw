let name = 'John';
let age = 35;

console.log(name);
console.log(age);

[name, age]= [age, name]

console.log(name);
console.log(age);


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array[4]+array[6]+array[9]);

function user (){

    let name = 'John';
    let age = 35;
  
    console.log(name);
    console.log(age);
  
    [name, age] = [age, name];
  
    console.log(name);
    console.log(age);
  
    let array = [1, 2, 3,4,5,6,7,8,9,10];
    let sum = array[4] + array[6] + array[9];
  
    console.log(sum);
  
    let men = {
        name: name,
        age: age,
        sum: sum,
    }
    
    console.log(men)
}

user()