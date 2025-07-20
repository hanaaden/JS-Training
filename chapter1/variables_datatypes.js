let x =90
check = typeof x
console.log(check)

let y =90
console.log( typeof y)
let t = String(y)
console.log(typeof t)

let mile1 = 1.609344
let mile = 5
let kilometer = mile * mile1
console.log(kilometer)

let a = "hello"
console.log("${a} world")

const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});
readline.question("enter a number", nun1 =>{
    readline.question('enter the operator', operator =>{
          readline.question('enter the other number' , num2 =>{
            
            const number1 = parseFloat(nun1)
            const number2 = parseFloat(num2)
            console.log("you num1 is" , number1)
            console.log("you operator is" , operator)
            console.log("you num1 is" , number2)
            if (operator === '/'){
            console.log(number1 / number2 )
            }else if (operator === '*'){
            console.log(number1 * number2 )
            }else if (operator === '-'){
            console.log(number1 - number2 )
            } else if (operator === '+'){
            console.log(number1 + number2 )
            }else{
            console.log("invalid")
            }
            readline.close();
    })
    
})   
})


