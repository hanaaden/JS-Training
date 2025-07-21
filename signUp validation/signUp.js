var myInput = document.getElementById('psd');
var letter = document.getElementById('letter');
var number = document.getElementById('number');
var capital  = document.getElementById('capital');
var length = document.getElementById('length');

var confirmPass = document.getElementById('confpsd');
var button = document.getElementById('button');
var button = document.getElementById('button');


//after declaration
myInput.onfocus = function(){
    document.getElementById('messege').style.display = 'block';
}

myInput.onblur = function(){
    document.getElementById('messege').style.display = 'none';
}

myInput.onkeyup = function(){
    var lowerCaseletters = /[a-z]/g;
    if(myInput.value.match(lowerCaseletters)){
        letter.classList.remove('invalid')
        letter.classList.add('valid')
    }else{
        letter.classList.remove('valid')
        letter.classList.add('invalid')
    }


    var uppperCaseLetter = /[A-Z]/g;
    if(myInput.value.match(uppperCaseLetter)){
        capital.classList.remove('invalid')
        capital.classList.add('valid')
    }else{
        capital.classList.remove('valid')
        capital.classList.add('invalid')
    }

    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)){
        number.classList.remove('invalid')
        number.classList.add('valid')
    }else{
        number.classList.remove('valid')
        number.classList.add('invalid')
    }

    if(myInput.value.length >= 8){
        length.classList.remove('invalid')
        length.classList.add('valid')
    }else{
          length.classList.remove('valid')
        length.classList.add('invalid')
    }

    button.onclick = function(){
         if(myInput.value == confirmPass.value){
          alert('passwords matches')
    }else{
        alert('match the passwords')
    }
    }

   
}
