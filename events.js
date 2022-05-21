const ocupation = document.getElementById("ocupation");
const salary = document.getElementById("salary");
const otherSalaries = document.getElementById("other");
const bills = document.getElementById("bills");
const form = document.getElementById("mainContainer__form");
let salaries = [];

function mainButton(){
    salaries.push(
        {ocup: ocupation.value, salr: parseInt(salary.value), otherSalr: parseInt(otherSalaries.value), bi: parseInt(bills.value)}
    )
    form.reset();
    return false;
};


