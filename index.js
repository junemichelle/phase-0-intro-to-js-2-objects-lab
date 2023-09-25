// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value){
  const updatedEmployee = { ...employee, [key]: value };
  return updatedEmployee;
}

const employee = {
name:"x",
streetAddress:"y",
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
  employee[key]=value
  return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}




// const employee = {
//   name: "Adline",
//   position: "Software Engineer",
//   age: 20,
// };

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//   const updatedEmployee = { ...employee, [key]: value };
//   return updatedEmployee;
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//   employee[key] = value;
//   return employee;
// }

// function deleteFromEmployeeByKey(employee, key) {
//   const newEmployee = { ...employee };
//   delete newEmployee[key];
//   return newEmployee;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//   delete employee[key];
//   return employee;
// }


// console.log(updateEmployeeWithKeyAndValue(employee, "age", 21));
// console.log(employee); 

// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Senior Software Engineer"));
// console.log(employee);

// console.log(deleteFromEmployeeByKey(employee, "age"));
// console.log(employee); 

// console.log(destructivelyDeleteFromEmployeeByKey(employee, "position"));
// console.log(employee);