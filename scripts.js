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



alert("hello "+name);