var images = [],
    index = 0,
    imges = document.getElementById('bac'),
    images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];



setInterval(function() {
    for (i = 0; i < images.length; i++) {
        index = Math.floor(Math.random() * images.length);

    }
    imges.src = images[index];
}, 3000);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


var span = document.getElementById('span');
var bot = document.querySelector('.bot');
span.onclick = function() {
    bot.textContent = "You Welcome ...!";

}
var span1 = document.getElementById('span1');
var bot1 = document.getElementById('bot1');
span1.onclick = function() {
    bot1.textContent = "You Welcome ...!";

}
var span2 = document.getElementById('span2');
var bot2 = document.getElementById('bot2');
span2.onclick = function() {
    bot2.textContent = "You Welcome ...!";

}

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;
    var email = document.getElementById("email").value;
    if (username == null || username == "") {
        alert("Please enter the username.");
        return false;
    }
    if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
    }
    if (email == null || email == "") {
        alert("Please enter your email.");
        return false;
    }
    alert('sign up successful');

}

function validat() {
    var password = document.getElementById("password").value;
    var email = document.getElementById("mail").value;
    if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
    }
    if (email == null || email == "") {
        alert("Please enter your email.");
        return false;
    }
    alert('Login successful');

}

var exit = document.getElementById('exit');
var first = document.getElementById('fir');
var explor = document.getElementById('btn');
var sun = document.getElementById('sun');
var namee = document.getElementById('name');
exit.onclick = function() {
    first.style.visibility = "hidden";
}
explor.onclick = function() {
    first.style.visibility = "visible";
}
sun.onclick = function() {
    first.style.visibility = "hidden";
    alert('welcome ' + namee.value);
}

// window.onscroll = function() { myFunction() };

// function myFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         first.style.visibility = "visible";
//     } else {
//         first.style.visibility = "hidden";
//     }
// }