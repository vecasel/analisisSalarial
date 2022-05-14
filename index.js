function dataAnalysis(){
    arrayDatosImp(salaries);
    arrayMediana(arrayOrd(arrayMapeado(salaries)));
    endeudamiento(salaries);
    ahorroCalc(salaries);
    topSalary(arrayOrd(arrayMapeado(salaries)), salaries);
}
