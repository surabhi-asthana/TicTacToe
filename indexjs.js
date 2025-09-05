function saveData(event){
    event.preventDefault();
let p1d=document.getElementById("p1").value.trim();
let p2d=document.getElementById("p2").value.trim();
if(p1d===""){
    p1d="X";
}
if(p2d===""){
    p2d="O";
}
if(p1d.length>10){
    p1d=p1d.slice(0,11);
}
if(p2d.length>10){
    p2d=p2d.slice(0,11);
}

sessionStorage.setItem('p1data', p1d);
sessionStorage.setItem('p2data', p2d);
window.location.href = 'TicTacToe.html';
}
