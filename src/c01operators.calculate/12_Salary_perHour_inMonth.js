// Write a C program that accepts an employee's ID, total worked hours in a month and the amount he received per hour. Print the ID and salary (with two decimal places) of the employee for a particular month. Test Data : Input the Employees ID(Max.10 chars) : 0342 Input the working hrs : 8 Salary amount / hr : 15000 Expected Output : Employees ID = 0342 Salary = U$ 120000.00


function salaryPerMonth(workedHours, salaryPerHour) {

  let resultSalary = workedHours * salaryPerHour
  return  parseInt(resultSalary.toFixed(2))
}
console.log(salaryPerMonth(8,15000))