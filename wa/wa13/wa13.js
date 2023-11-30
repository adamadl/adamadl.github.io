//Problem 1
const employees = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    },
];

console.log("Problem 1");
console.log(employees);
    
//Problem 2
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

console.log("Problem 2");
console.log(company);

//Problem 3
const employeesUpdate = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    },
    {
        firstName: "Anna",
        department: "Tech",
        designation: "Executive",
        salary: 25600,
        raiseEligible: false
    },
];

const companyUpdate = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employeesUpdate
};

console.log("Problem 3");
console.log(employeesUpdate);
console.log(companyUpdate);

//Problem 4
let totalSalary = 0;
for(let i = 0; i < companyUpdate.employees.length; i++){
    totalSalary += companyUpdate.employees[i].salary;
}

console.log("Problem 4");
console.log(totalSalary)

//Problem 5
const employeesUpdateSalary = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    },
    {
        firstName: "Anna",
        department: "Tech",
        designation: "Executive",
        salary: 25600,
        raiseEligible: false
    },
];

function salaryIncrease(employee){
    if(employee.raiseEligible){
        employee.salary *= 1.1;
        employee.raiseEligible = false;
    }
}

employeesUpdateSalary.forEach(salaryIncrease);

console.log("Problem 5");
console.log(employeesUpdateSalary)

//Problem 6
const workingFromHome = ['Anna', 'Sam'];

for (let i = 0; i < employeesUpdateSalary.length; i++) {
    employeesUpdateSalary[i].wfh = workingFromHome.includes(employeesUpdateSalary[i].firstName);
}

const updatedCompany = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employeesUpdateSalary
};

console.log("Problem 6");
console.log(updatedCompany);