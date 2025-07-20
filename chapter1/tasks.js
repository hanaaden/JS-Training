const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})

readline.question("enter a password: " , password =>{
    
      if (password === "admin123") {
     console.log("successfully login")
    }else{
        
        console.log("try again")
    }
    
    readline.close()
    
})




