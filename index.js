function dataAnalysis(){
    document.getElementById("mainContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "flex";
    
    arrayDatosImp(salaries);
    arrayMediana(arrayOrd(arrayMapeado(salaries)));
    endeudamiento(salaries);
    ahorroCalc(salaries);
    topSalary(salaries);
}
