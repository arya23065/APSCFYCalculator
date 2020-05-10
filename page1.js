
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