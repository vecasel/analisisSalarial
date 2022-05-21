
function arrayDatosImp(salaries){
    let dataArray = salaries.map(iter => {
        return '<li>' + "Nombre: " + iter.ocup + '<li>' + "Salario: " + iter.salr + '<li>' + "Otros Ingresos: " + iter.otherSalr + '<li>' + "Gastos: " + iter.bi + '<br>';
    });
    document.getElementById("dataResult").innerHTML = dataArray;
}


function arrayMapeado(salaries){
    let arrayMap = salaries.map(iter => {
        return iter.salr + iter.otherSalr;
    });
    return arrayMap;
}


function arrayOrd(arrayMap){
    let arraySorted = arrayMap.sort((a,b) =>{
        return a - b;
    });
    return arraySorted;
}


function arrayMediana(arraySorted){
    let mediana;
    if (arraySorted.length %2 === 0){
        const medianaNumber1 = arraySorted[(arraySorted.length / 2) - 1];
        const medianaNumber2 = arraySorted[arraySorted.length / 2];
        mediana = (medianaNumber1 + medianaNumber2) / 2;
    }
    else{
        mediana = arraySorted[parseInt(arraySorted.length / 2)];
    }
    document.getElementById("medianaResult").innerText = mediana;
}


function endeudamiento(salaries){
    let salaryEndArray = [];
    let endArray = [];

    for(j = 0; j < salaries.length; j++){
        salaryEndArray.push(
            {endeud: (((salaries[j].salr + salaries[j].otherSalr) - salaries[j].bi)* 0.35).toFixed(2)}
        )
    }

    for(i = 0; i < salaries.length; i++){
        endArray.push(
            {name : salaries[i].ocup, end: salaryEndArray[i].endeud}
        )
    }
    let dataArray = endArray.map(iter => {
        return '<li>' + "Nombre: " + iter.name + '<li>' + "Capacidad de Endeudamiento: " + iter.end + '<br>';
    });
    document.getElementById("endResult").innerHTML = dataArray;
}


function ahorroCalc(salaries){
    let ahArray = [];
    let salaryAhArray = [];

    for (j = 0; j < salaries.length; j++){
        salaryAhArray.push(
            {ahorro: ((salaries[j].salr + salaries[j].otherSalr) - salaries[j].bi).toFixed(2), porc: ((((salaries[j].salr + salaries[j].otherSalr) - salaries[j].bi) / (salaries[j].salr + salaries[j].otherSalr) ) * 100).toFixed(2)}
        )
    }
    for(i = 0; i < salaries.length; i++){
        ahArray.push(
            {name : salaries[i].ocup, aho: salaryAhArray[i].ahorro, prc: salaryAhArray[i].porc}
        )
    }
    let dataArray = ahArray.map(iter => {
        return '<li>' + "Nombre: " + iter.name + '<li>' + "Capacidad de Ahorro: " + iter.aho + '<li>' + "%: " + iter.prc + '<br>';
    });
    document.getElementById("ahorroResult").innerHTML = dataArray;
}


function topSalary(salaries){
    let orArray = [];

    let arrayMap = salaries.map(iter => {
        return {name: iter.ocup, salary: iter.salr + iter.otherSalr}
    });

    let arraySorted = arrayMap.sort((a,b) =>{
        return a.salary- b.salary;
    });
    for (i = arraySorted.length - 1; i >= (arraySorted.length - 3); i--){
        orArray.push(
            {name: arraySorted[i].name, salary: arraySorted[i].salary}   
        )
    }

    let dataArray = orArray.map(iter => {
        return '<li>' + "Nombre: " + iter.name + '<li>' + "Salario: " + iter.salary + '<br>';
    });
    document.getElementById("topResult").innerHTML = dataArray;
}
 
