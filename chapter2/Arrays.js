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