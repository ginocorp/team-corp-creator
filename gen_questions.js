const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

class Questions {

  async startQuestion(){
    const startQuestions = [
    {
      type: "confirm",
      name: "startGame",
      message: "Welcome to Team Builder 2.0 | Want to make a Webpage that Generates *YOUR* Team? | Try this App!",
    }]
    const startResponse = await inquirer.prompt(startQuestions);
    return startResponse
  }

  async confirmEmployee(){
    const confirmEmployee = [
    {
      type: "confirm",
      name: "confirmEmp",
      message: "Would you like to add another Employee?",
    }]
    const confirm = await inquirer.prompt(confirmEmployee);
    return confirm
  }
 
  async employeeRole(){
    const employeeRoles = [
      {
        type: "list",
        name: "listEmp",
        message: "What role is the new Employee?",
        choices:["Manager","Engineer", "Intern"]
      }]
    const roleResponse = await inquirer.prompt(employeeRoles);
    return roleResponse
  }

  async employeeQuestions() {
    const employeeQuestion = [
      {
        type: "input",
        name: "empName",
        message: "Hello!, What is your name?",
        default: "Associate Name",
      },
      {
        type: "input",
        name: "empEmail",
        message: "What is your employee Email?",
        default: "associateEmail@fake.com",
      },
      {
        type: "input",
        name: "empId",
        message: "What is your employee ID?",
        default: "007",
      }]
      const employeeResponse = await inquirer.prompt(employeeQuestion);
      return employeeResponse
  }

  async managerQuestions() {
    const managerQuestion = [
      {
        type: "input",
        name: "mgrOffice",
        message: "What is your Office Number?",
        default: "001"
      }]
      const managerResponse = await inquirer.prompt(managerQuestion);
      return managerResponse
  }

  async engineerQuestions() {
    const engineerQuestion = [
      {
        type: "input",
        name: "github",
        message: "What is your GitHub Username?",
      }]
      const engineerResponse = await inquirer.prompt(engineerQuestion);
      return engineerResponse
  }

  async internQuestions() {
    const internQuestion = [
    {
      type: "input",
      name: "schoolName",
      message: "What is your School name?",
    }]
    const internResponse = await inquirer.prompt(internQuestion);
    return internResponse
   }
}
module.exports = Questions;