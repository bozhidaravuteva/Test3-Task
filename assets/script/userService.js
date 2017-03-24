//user model
function User(name, password) {
    this.name = name;
    this.password = password
}


var userManager = (function() {

    var users=JSON.parse(window.localStorage.getItem("users")) || [];
    // za celite na experimenta, dobavqm purviq chovek v sistemata
    // users.push(new User("Adam" , "3141"))

    return {
        addUser: function(user) {
            if (user instanceof User) {
                console.log("bravo");
                users.push(user);
                window.localStorage.setItem("users", JSON.stringify(users));
            }
        },
        // loginUser vryshta true ili false
        loginUser: function(name, password) {
            return users.some(function (potrebitel) {
                return (potrebitel.name === name) &&
                    (potrebitel.password === password);
            });
        },
        // nujno e za proverka  pri registrirane dali veche syshtestvuva user s takova ime pri registrirane,
        //  vryshta true ili false
        isUserNameExists : function(name) {
            return users.some(function (potrebitel) {
                return (potrebitel.name === name);
            });
        }
    }
})();