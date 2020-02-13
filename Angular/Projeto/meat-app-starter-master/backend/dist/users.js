"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "gabriela@gmail.com": new User("gabriela@gmail.com", 'Gabriela', '123456'),
    "matheus@gmail.com": new User("matheus@gmail.com", 'Matheus', '123456')
};
