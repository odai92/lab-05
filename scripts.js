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
