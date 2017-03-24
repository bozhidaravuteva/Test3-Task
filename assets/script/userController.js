
(function() {
    //za pokazvane na formata za vhod
var log = document.getElementById("log");
log.addEventListener("click", function(){
    var main = document.getElementById("changeable");
    var formLog = document.getElementById("login");
    formLog.style.display = "block";
}, false)

// za pokazvane na formata za registraciq
var sign = document.getElementById("sign");
sign.addEventListener("click", function(){
    var main = document.getElementById("changeable");
    var formSign = document.getElementById("signUp");
    formSign.style.display = "block";
}, false)
 
// vlizane v profil
    var login = document.getElementById('loginBut');
    login.addEventListener('click', function (event) {
        event = event || window.event;

        var inputs = document.querySelectorAll("#login > input");
        var name = inputs[0].value.trim();
        var password = inputs[1].value.trim();

        //ako se logne uspeshno, f-qta vyrne true
        if (userManager.loginUser(name, password)) {
            window.location = "assets/html/movieCollection.html";
        // signalizira za greshka 
        } else {
            var error = document.createElement('span');
            error.style.border = "1px solid #787878";
            error.style.backgroundColor = "white";
            error.textContent = "Грешно име или парола!";
            inputs[0].parentNode.appendChild(error);
        }
        event.preventDefault();
    },false)

// registraciq
    var register = document.getElementById('signUpBut');
    register.addEventListener('click', function (event) {
        var inputs = document.querySelectorAll("#signUp > input");
        var name = inputs[0].value.trim();
        var password = inputs[1].value.trim();
        
        if (!userManager.isUserNameExists(name)) {
            userManager.addUser(new User(name,password));
        } else {
            alert("Syshtestvuva takova potrebitelsko ime!");
        }
        var formReg= document.getElementById("signUp");
        formReg.style.display = 'none';
        event.preventDefault();
    },false)
})()



