
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
    equation = equation.concat(String(entry));
    Calculator.calcDisplay.value = equation;
}

operations = ['-', '+', '/', '*']
          
function evaluateCalc(Calculator) {   
    while (equation.includes("!")) {
        factorialStart = 0; 
        factorialStop = 0; 

        for(i = 0; i < equation.length; i++) {
            if(operations.includes(equation[i])) { 
                factorialStart = i + 1; 
            } else if (equation[i] == '!') {
                factorialStop = i; 
                break;
            }
        }

        factorialOf = eval(equation.substring(factorialStart, factorialStop));
        factorial = 1;
                         
        for(i = 2; i <= factorialOf; i++) 
            factorial = factorial*i; 

        equation = equation.substring(0, factorialStart).concat(String(factorial).concat(equation.substring(factorialStop + 1, equation.length)));
    }

    while (equation.includes("%")) {
        percentageStart = 0; 
        percentageStop = 0; 

        for(i = 0; i < equation.length; i++) {
            if(operations.includes(equation[i])) { 
                percentageStart = i + 1; 
            } else if (equation[i] == '%') {
                percentageStop = i; 
                break;
            }
        }

        percentageOf = eval(equation.substring(percentageStart, percentageStop));
        percentage = percentageOf/100;
        // Calculator.calcDisplay.value = equation.substring(percentageStart, percentageStop); 
        equation = equation.substring(0, percentageStart).concat(String(percentage).concat(equation.substring(percentageStop + 1, equation.length)));
    }
    result = eval(equation).toFixed(4); 
    if (result == "NaN") alert('This equation cannot be solved');
    else Calculator.calcDisplay.value = result; 
} 

var multChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '[', ']', ','];

function calculateMult(Mult) {

    if(checkMatricesFormat(Mult) && checkMatrixBrackets(Mult.Mult1) && checkMatrixBrackets(Mult.Mult2)) {
        matrix1 = [];
    }
    return;
}

function fillMatrix(Matrix, list) {
    list = []; 
    var stack = new Stack();

    for (i = 0; i < Matrix.value.length; i++) {
        if

    }

}

function checkMatrixBrackets(Matrix) {
    right = 0;
    left = 0;

    for (i = 0; i < Matrix.value.length; i++) {
        if (Matrix.value[i] == '[') right++;
        else if (Matrix.value[i] == ']') left++;
    }

    if (right != left) {
        alert('Matrix is missing a bracket');
        return 0; 
    } else return 1; 
}

function checkMatricesFormat(Form) {

    if(Form.Mult1.value == "" || Form.Mult2.value == "") {
        alert('Please fill matrices');
        return;
    }

    matrix1Wrong = 0;
    matrix2Wrong = 0;
    
    for(i = 0; i < Form.Mult1.value.length; i++) {
        if(!(multChars.includes(Form.Mult1.value[i]))) {
            matrix1Wrong = 1;
            break;
        }
    }

    for(i = 0; i < Form.Mult2.value.length; i++) {
        if(!(multChars.includes(Form.Mult2.value[i]))) {
            matrix2Wrong = 1;
            break;
        }
    }

    if(matrix1Wrong && matrix2Wrong) alert('Matrix 1 and 2 are in the incorrect format');
    else if (matrix1Wrong) alert('Matrix 1 is in the incorrect format'); 
    else if (matrix2Wrong) alert('Matrix 2 is in the incorrect format');

    if(matrix1Wrong || matrix2Wrong) return 0;
    else return 1;

}