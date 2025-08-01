const g = document.getElementById("guess")
const messege = document.getElementById("message")
const btn = document.getElementById("checkBtn")
let randon = Math.floor(Math.random() *(101 - 0) + 0 )
const counter = document.getElementById("attempts")
const title = document.getElementById("title")
const playAgain = document.getElementById("playAgain")
let count = 0

btn.addEventListener("click" , checker= () =>{
    
   
    const guess = document.getElementById("guess").value
    let gues = parseInt(guess)
  if (count < 10){
      if (gues > randon ){
            messege.textContent = "TOO HIGH"
            messege.style.color ="red"
    }else if ( gues < randon){
        messege.textContent = "TOO LOW"
        messege.style.color ="orange"
    }else if( gues === randon){
        title.style.display = "none"
        messege.textContent = "you get the correct number"
        messege.style.fontSize = "30px"
        messege.style.color ="green"
        counter.style.display = "none"
       btn.style.display = "none"
       g.style.display = "none"
       playAgain.style.display = "block"
       count = 0
    }else{
        messege.textContent = "INVALID"
    }
    count++
       counter.textContent = `you guessed ${count} times`
  }else{
       title.textContent = "GAME IS OVER"
       messege.textContent = "Too many attemps"
       messege.style.color ="red"
       counter.style.display = "none"
       btn.style.display = "none"
       g.style.display = "none"
       playAgain.style.display = "block"
       count = 0
  }
    
})
playAgain.addEventListener("click" , ()=>{
 
   count = 0
   counter.style.display = "block"
   title.style.display = "block"
    title.textContent = "Guess the Number!"
       btn.style.display = "block"
       btn.style.marginLeft = "8rem"
        messege.textContent = "  "
        g.style.display = "block"
        g.style.marginLeft = "2rem"
        g.value = ""
        playAgain.style.display = "none"
        let randon2 = Math.floor(Math.random() *(101 - 0) + 0 )
        randon = randon2
       
      
   counter.textContent = `you guessed ${count} times`
})
