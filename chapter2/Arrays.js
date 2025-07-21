// creating array
let arr = [10]
console.log(arr)
// the type will be object
let arr2 = ["Hello" , 12 , true]
console.log(typeof arr2[0]) // string
console.log(typeof arr2[1]) //  number
console.log(typeof arr2[2]) // boolean

// accessing
console.log(arr2[0])

// changing constant value
const arrr = "hello world"
arrr[0] = "new value"
console.log(arrr[0]) // this is will change the value 
// arrr = ["new " , "value "] 
//TypeError: Assignment to constant variable.

//create Array 
cars = ["toyota", "Tesla" , "BMW"]
console.log(cars)
console.log(cars[-1])

//the output will be ["Suzuki", "Tesla" , "BMW"]
cars[0]="Suzuki"
console.log(cars)

//checking the length
console.log(cars.length) //3
//adding value 
cars.push("Mercedes")
console.log(cars)
// adding with index
cars.splice(2,0,"chevrolet")
console.log(cars)

// concat
let arr = [1,2,3]
let arr1 = [4,5,6]
let arr2 = arr.concat(arr1)
console.log(arr2)

//finding 
let arr8 = [12,10,5,2]
let findValue2 = arr8.find(e => e === 10);
let findIndex3 = arr8.indexOf(6, 2);
console.log(findValue2);
console.log(findIndex3)

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names)





