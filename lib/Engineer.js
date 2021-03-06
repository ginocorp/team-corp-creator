const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name = null, id = null, email = null, github = null) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github
    }
    getRole() {
        return this.role
    }
}
module.exports = Engineer;
