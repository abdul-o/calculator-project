

function dis(val){
    document.getElementById('display').value+=val
};

// let par1;
// let par2;
// let par3;

function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("result").value 
        console.log(x); 
        solve(); 
    } 
} 





// Function that evaluates the digit and return result 
function solve() { 
    let x = document.getElementById("display").value 
    let y = math.evaluate(x) 
    document.getElementById("display").value = y 
} 



// let par1;
// let par2;
// let par3;

// function result (){
// if(val === 1||2||3||4||5||6||7||8||9||0) {
//     par1=val;
// }
// else if(val === "*"||"-"||"+"||"/") {
//     par2=val;
// }
// else if(par1 !=="" && value === 1||2||3||4||5||6||7||8||9||0) {
//     par3 = val
// }
// else{
//     result="error"
// };

// Calculation

// if(par2 === "+"){
//     result=par1 + par3
// }
// else if(par2 === "-"){
//     result=par1 - par3
// }
// else if(par2 === "*"){
//     result=par1 * par3
// }
// else if(par2 === "/"){
//     result=par1 / par3;
// }

// document.getElementById('equal').value = result;
// };
