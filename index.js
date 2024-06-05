

function dis(val){
    document.getElementById('display').value+=val
};

let par1;
let par2;
let par3;

function result (){
if(val === 1||2||3||4||5||6||7||8||9||0) {
    par1=val;
}
else if(val === "*"||"-"||"+"||"/") {
    par2=val;
}
else if(par1 !=="" && value === 1||2||3||4||5||6||7||8||9||0) {
    par3 = val
}
else{
    result="error"
};

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
};
