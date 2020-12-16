var name = prompt('Whats your name')

var password = prompt('Whtas ur pass')


function printName(name) {
    alert('whats ur name')
}

function checkpassword(password) {
    if (password == 123){
        alert("logged in");
        printName(name);
    } else {
        alert("incorrect password")
    }
    
}


function createGreeting(){
    let  hourNow = prompt('how old r u');
    let greeting;
if (hourNow > 10 && hourNow < 20 ){
greeting = ' Hello!';
} else if ( hourNow < 10 && hourNow > 20){
    greeting = 'Bye!';
} else if (hourNow >= 0 && hourNow < 20 ){
    greeting = 'night';
} else {
    greeting = "Error!";
}

document.write(greeting);
}


let x = 0;
while (x < 10) {
    x++;
    console. log(x)
    
}




let getItem = function(){
    let userInput = prompt('what kind of pet u need?');
    let item = '';
    
    while(userInput !== 'cat' && userInput !== "dog") {
        userInput = prompt('please choose cat or dog!'); 
    }

    if(userInput === 'cat'){
        item =  < img src= 'images/cat.png' />
    } else if (userInput === 'dog'){
        item = < img src='images/cat.png' /> 
           }

           return item;

}

let howMany = function(){
    let count = prompt('How Many Pets u need?');

    while (count === '' || isNaN(count)) {
        count = prompt('How Many Pets u need?');
        return count;
    }
}


let showOrder = function(){
    let item = getItem();
   let total = howMany();
   let result = '';

    for(let i = 0; i < total; i++) {
      result = result + '<p>Model #' + i + '' + item + '</p>'
    }

// document.write(item);
    return result();
}