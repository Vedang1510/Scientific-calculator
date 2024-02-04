var degBtn = document.querySelector('.deg-btn');
var radBtn = document.querySelector('.rad-btn');
let deg = true;
var ans = null;
degBtn.style.backgroundColor = '#404347';

radBtn.addEventListener('click', function(event){
    degBtn.style.backgroundColor = 'transparent';
    radBtn.style.backgroundColor = '#404347';
    deg = false;
});

degBtn.addEventListener('click', function(event){
    radBtn.style.backgroundColor = 'transparent';
    degBtn.style.backgroundColor = '#404347';
    deg = true;
});

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('displayAns').innerHTML = '';
    ans = null;
}
function CE(){
    let x = document.getElementById('display').value;
    let disp = '';
    for(let i=0; i<x.length-1; i++){
        disp += x[i];
    }
    document.getElementById('display').value = disp;
}
function sqrt(){
    let x = document.getElementById('display').value;
    let sol = Math.sqrt(x);
    ans = sol;
    document.getElementById('displayAns').innerHTML = sol;
    document.getElementById('display').value = '';
}
function exp(){
    let x = document.getElementById('display').value;
    let sol = Math.exp(x);
    ans = sol;
    document.getElementById('displayAns').innerHTML = sol;
    document.getElementById('display').value = '';
}
function Ans(){
    document.getElementById('display').value = ans;
}
function factorial(){
    let x = document.getElementById('display').value;
    let sol = 1;
    for (let i = 2; i <= x; i++) {
        sol *= i;
    }
    document.getElementById('displayAns').innerHTML = sol;
    ans = sol;
    document.getElementById('display').value = '';
}
function calculate() {
    try {
        let val = document.getElementById('display').value;
        val = val.replace("^","**")
        ans = eval(val);
        document.getElementById('displayAns').innerHTML = ans;  
        document.getElementById('display').value = '';
         
    } catch (error) {
        document.getElementById('display').innerHTML = 'Error';
        ans = null;
        document.getElementById('display').value = '';
    }
}
function sine(){
    let val = document.getElementById('display').value;
    if(deg == true){
        val = val*Math.PI/180;
    }
    ans = Math.sin(val).toFixed(4);
    document.getElementById('displayAns').innerHTML = ans;
    document.getElementById('display').value = '';
}
function cosine(){
    let val = document.getElementById('display').value;
    if(deg == true){
        val = val*Math.PI/180;
    }
    ans = Math.cos(val).toFixed(4);
    document.getElementById('displayAns').innerHTML = ans;
    document.getElementById('display').value = '';
}
function tangent(){
    let val = document.getElementById('display').value;
    if(deg == true){
        val = val*Math.PI/180;
    }
    ans = Math.tan(val).toFixed(4);
    document.getElementById('displayAns').innerHTML = ans;
    document.getElementById('display').value = '';
}
function tangentInv(){
    let val = document.getElementById('display').value;
    val = Math.atan(val);
    if(deg == true){
        val = (val*180)/Math.PI;
    }
    ans = val.toFixed(2);
    document.getElementById('displayAns').innerHTML = ans;
    document.getElementById('display').value = '';
}
function cosineInv(){
    let val = document.getElementById('display').value;
    val = Math.acos(val);
    if(deg == true){
        val = (val*180)/Math.PI;
    }
    ans = val.toFixed(2);
    document.getElementById('displayAns').innerHTML = ans;
    document.getElementById('display').value = '';
}
function sineInv(){
    let val = document.getElementById('display').value;
    val = Math.asin(val);
    if(deg == true){
        val = (val*180)/Math.PI;
    }
    ans = val.toFixed(2);
    document.getElementById('displayAns').innerHTML= ans;
    document.getElementById('display').value = '';
}
function exponential(){
    let val = document.getElementById('display').value;
    ans =  Math.exp(val);
    document.getElementById('displayAns').innerHTML = ans;
    document.getElementById('display').value = '';
}
function log(){
    let val = document.getElementById('display').value;
    ans = Math.log(val)/Math.log(10);
    document.getElementById('displayAns').innerHTML = ans; 
    document.getElementById('display').value = '';
}
function ln(){
    let val = document.getElementById('display').value;
    ans = Math.log(val)/Math.log(2.718281828459045);
    document.getElementById('displayAns').innerHTML = ans;
    document.getElementById('display').value = '';
}