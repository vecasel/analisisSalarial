const mainSection = document.getElementById("button");
const mainInformation = document.getElementById("mainButton");
const ocupation = document.getElementById("ocupation");
const salary = document.getElementById("salary");
const otherSalaries = document.getElementById("other");
const bills = document.getElementById("bills");
const form = document.getElementById("mainContainer__form");
let salaries = [];


mainSection.addEventListener("click", function(){
    document.getElementById("mainContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "flex";
})

mainInformation.addEventListener("click", function(){
    salaries.push(
        {ocup: ocupation.value, salr: parseInt(salary.value), otherSalr: parseInt(otherSalaries.value), bi: parseInt(bills.value)}
    )
    form.reset();
});


