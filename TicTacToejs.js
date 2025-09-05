let p1d = sessionStorage.getItem("p1data");
let p2d = sessionStorage.getItem("p2data");
document.getElementById("name1").innerText = p1d;
document.getElementById("name2").innerText = p2d;
let win1; let win2;
function resetScore() {
        win1 = 0;
        win2=0;
    sessionStorage.removeItem("Player1");
    document.getElementById("score1").innerText = win1;
    sessionStorage.removeItem("Player2");
    document.getElementById("score2").innerText = win2;
  }
function saveValue() {
  let value1=win1;
  let value2=win2;
  sessionStorage.setItem("Player1", value1);
  sessionStorage.setItem("Player2", value2);
}
window.onload = function() {
  let x1 = sessionStorage.getItem("Player1");
  let x2 = sessionStorage.getItem("Player2");
  win1 = x1 ? parseInt(x1) : 0;
  win2 = x2 ? parseInt(x2) : 0;
  document.getElementById("score1").textContent=win1;
  document.getElementById("score2").textContent=win2;
}
let a=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let player=1;
document.getElementById("para").textContent=`Player ${player}: ${p1d}'s turn`;
let buttons = document.querySelectorAll("button");
let w=0;
function check(){
  for(let i=0;i<a.length;i++){
    if(buttons[a[i][0]].innerText==buttons[a[i][1]].innerText && buttons[a[i][1]].innerText==buttons[a[i][2]].innerText && buttons[a[i][2]].innerText=="X"){
document.getElementById("para").textContent=`Winner: ${p1d}`;
win1+=1;
sessionStorage.setItem("Player1", win1);
document.getElementById("score1").textContent=win1;
buttons.forEach(btn => btn.disabled = true);
w=1;
}
if(buttons[a[i][0]].innerText==buttons[a[i][1]].innerText && buttons[a[i][1]].innerText==buttons[a[i][2]].innerText && buttons[a[i][2]].innerText=='O'){
document.getElementById("para").textContent=`Winner: ${p2d}`;
win2+=1;
document.getElementById("score2").textContent=win2;
sessionStorage.setItem("Player2",win2);
buttons.forEach(btn => btn.disabled = true);
w=1;
   }
}
}
 function changeColor() {
  
    if(player==2){
    document.body.style.background = "rgba(254, 239, 239, 1)";
    document.body.style.setProperty("color","rgba(44, 24, 82, 1)","important");
    document.getElementById("TicTacToe").style.color = "rgba(145, 7, 0, 1)";
    document.getElementById("para").style.color = "rgba(145, 7, 0, 1)";
   document.getElementById("container").style.setProperty("border", "10px solid rgba(145,7,0,1)", "important");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "rgba(255, 189, 189, 1)";
      buttons[i].style.borderColor = "rgba(145, 7, 0, 1)";
    }
    buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
     if(!(btn.disabled)){
      btn.style.backgroundColor = "rgba(255, 241, 241, 1)"; }  
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = "rgba(255, 189, 189, 1)";    
    });
  });   
}
    else{
        document.body.style.background = "rgba(224, 232, 252, 1)";
    
    document.getElementById("TicTacToe").style.color = "rgba(44, 24, 82, 1)";
    document.getElementById("para").style.color = "rgba(44, 24, 82, 1)";
    document.getElementById("container").style.setProperty("border", "10px solid rgba(44, 24, 82, 1)", "important");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "rgb(185, 204, 255)";
      buttons[i].style.borderColor = "rgba(44, 24, 82, 1)";
    }
     buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        if(!(btn.disabled)){
      btn.style.backgroundColor = "rgb(234, 241, 252)";   }
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = "rgb(185, 204, 255)";    
    });
  });
    }
    }
function place(id){
   if (w === 1) return;
    if(player==1){
        document.getElementById(id).textContent='X';
        document.getElementById(id).style.color = "rgba(44, 24, 82, 1)";
        document.getElementById(id).disabled=true;
        document.getElementById("para").textContent=`Player 2: ${p2d}'s turn`;

    }
    else{
        document.getElementById(id).textContent='O';
        document.getElementById(id).style.color = "rgba(145, 7, 0, 1)";
        document.getElementById(id).disabled=true;
        document.getElementById("para").textContent=`Player 1: ${p1d}'s turn`;        
}
 check();
  if (w === 1) return;
  player = (player === 1 ? 2 : 1);
  changeColor();
function ButtonsDisabled() {
  for (let i = 0; i < buttons.length; i++) {
    if (!buttons[i].disabled) {
      return false; 
    }
  }
  return true; 
}
let but=ButtonsDisabled();
if(but==true && w==0){
  document.getElementById("para").textContent="It's a draw!";
}
}




