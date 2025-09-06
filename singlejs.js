function saveData(event){
    event.preventDefault();
let p1d=document.getElementById("p1").value.trim();
if(p1d===""){
    p1d="X";
}
if(p1d.length>10){
    p1d=p1d.slice(0,11);
}
sessionStorage.setItem('p1data1', p1d);
window.location.href = 'TicTacToe1.html';
}
