
function calculateCP(){
    var a1 = document.getElementById("vectora1").value;
    var a2 = document.getElementById("vectora2").value;
    var a3 = document.getElementById("vectora3").value;
    var b1 = document.getElementById("vectorb1").value;
    var b2 = document.getElementById("vectorb2").value;
    var b3 = document.getElementById("vectorb3").value;

    if (a1 === "" || a2 === "" || a3 === "" || b1 === "" || b2 === "" || b3 === "") { 
        // check that all coordinates of the vector are filled
        alert('Please fill the vectors'); 
    } else {
        document.getElementById("dp").value = a1*b1 + a2*b2 + a3*b3; 
        document.getElementById("cp1").value = a2*b3 - a3*b2; 
        document.getElementById("cp2").value = - (a1*b3 - a3*b1); 
        document.getElementById("cp3").value = a1*b2 - a2*b1; 
    }
}

equation = "";

function backspaceCalc(Calculator) {   
    if (equation != ""){
        equation = Calculator.calcDisplay.value.substring(0, Calculator.calcDisplay.value.length-1);
        Calculator.calcDisplay.value = equation;
    }
}

function clearCalc(Calculator) {
    equation = "";
    Calculator.calcDisplay.value = equation;
}

function calcClick(entry, Calculator) {
    if (entry == "cos(" || entry == "sin("|| entry == "tan(") {
        clearCalc(Calculator);
    }
    equation = equation.concat(String(entry));
    Calculator.calcDisplay.value = equation;
    if(entry == "%") evaluate(Calculator);
}
          
function evaluateCalc(Calculator) {               
    if (Calculator.calcDisplay.value.includes("!")) {           
        var entryLength = Calculator.calcDisplay.value.length; 
        n = Number(Calculator.calcDisplay.value.substring(0, entryLength-1)); 
        f = 1; 
                  
        for(i = 2; i <= n; i++) 
            f = f*i; 

        Calculator.calcDisplay.value = f; 

    } else if(Calculator.calcDisplay.value.includes("%")) { 
        var entryLength = Calculator.calcDisplay.value.length; 
        n = Number(Calculator.calcDisplay.value.substring(0, entryLength-1)); 
        Calculator.calcDisplay.value = n/100; 
    } else     
    Calculator.calcDisplay.value = eval(Calculator.calcDisplay.value); 
} 