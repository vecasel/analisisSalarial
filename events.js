var dataSection = document.getElementById("dataButton");
var mainSection = document.getElementById("button");
var dataSelection = document.getElementById("dataLabelContainer");
var numberData;


dataSection.addEventListener("click", function(){

    switch(true){
        case dataSelection.value == '':
            alert("Debe colocar algún número");
            break;
        case parseInt(dataSelection.value) <= 0:
            alert("Debe colocar un número mayor a 0");
            break;
        case parseInt(dataSelection.value) == 1:
            document.getElementById("dataContainer").style.display = "none";
            numberData = parseInt(document.getElementById("dataLabelContainer").value);
            document.getElementById("mainContainer").style.display = "flex";
            document.getElementById("mainButton").style.display = "none";
            break;
        case parseInt(dataSelection.value) > 1:
            document.getElementById("dataContainer").style.display = "none";
            numberData = parseInt(document.getElementById("dataLabelContainer").value);
            document.getElementById("mainContainer").style.display = "flex";
        default:
            console.log("Falló");
    }
});

mainSection.addEventListener("click", function(){
    document.getElementById("mainContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "flex";
})



