// Internal Modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Render = require("./lib/renderHTML");
const Questions = require("./gen_questions");

// Packages Needed
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

var employees = [];
const q = new Questions


//application start; type npm start in terminal
async function init() {
  try {
    const startApp = await q.startQuestion();
      if(startApp.startGame)
        var keepRunning = true
        while (keepRunning) {
          var empRole = await q.employeeRole();
          const empData = await q.employeeQuestions();
          switch(empRole.listEmp) {
            case 'Manager':
              var roleData = await q.managerQuestions();
              newEmployee = new Manager(empData.empName, empData.empId, empData.empEmail, roleData.mgrOffice);
            break;
            case 'Engineer':
              var roleData = await q.engineerQuestions();
              newEmployee = new Engineer(empData.empName, empData.empId, empData.empEmail, roleData.github);
            break;
            case 'Intern':
              var roleData = await q.internQuestions();
              newEmployee = new Intern(empData.empName, empData.empId, empData.empEmail, roleData.schoolName);
            break;
          }
          employees.push(newEmployee)
          console.log(employees);
          var status = await q.confirmEmployee();
          keepRunning = status.confirmEmp
        }
    } catch (error) {
        console.log(error);
    };
// inputs gathered and renders to the HTML in output folder
    try {
        let renderedHTML = Render(employees);
        fs.writeFileSync(outputPath, renderedHTML);
        console.log('Finished! Check out your HTML page in the output folder.')
    } catch (error) {
        console.log(error);
    }

};
init();