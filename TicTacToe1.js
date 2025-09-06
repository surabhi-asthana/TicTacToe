let p1d = sessionStorage.getItem("p1data1");
document.getElementById("name1").innerText = p1d;
let a=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let b=[0,1,2,3,4,5,6,7,8];
let buttons = document.querySelectorAll("button");
let w=0;
player=1;
let win11=0;let win22=0;
let dropdown = document.getElementById("choice");
function getKeys() {
  let mode = dropdown.value; 
  return {
    p1: `Player11_${mode}`,
    p2: `Player22_${mode}`
  };
}
function resetScore() {
   win11 = 0;
  win22 = 0;
  let { p1, p2 } = getKeys();
  sessionStorage.removeItem(p1);
  sessionStorage.removeItem(p2);
  document.getElementById("score1").innerText = win11;
  document.getElementById("score2").innerText = win22;
  updateUI();
  }
  function resetBoard() {
    buttons.forEach(btn => {
        btn.textContent = "";
        btn.disabled = false;
        btn.style.backgroundColor = "";  
        btn.style.color = "";
        btn.style.border = "";
        btn.onmouseenter = null;
    btn.onmouseleave = null; 
     btn.onmouseenter = () => {
        if (!btn.disabled) {
            btn.style.backgroundColor = 
                (player == 2) ? "rgba(255, 241, 241, 1)" : "rgb(234, 241, 252)";
        }
    };

    btn.onmouseleave = () => {
        btn.style.backgroundColor = 
            (player == 2) ? "rgba(255, 189, 189, 1)" : "rgb(185, 204, 255)";
    };
    });
       document.getElementById("container").style.setProperty("border", "");
       document.body.style.background="";
       document.getElementById("TicTacToe").style.color = "";
    document.getElementById("para").style.color = "";
    w = 0;
    player = 1;
    document.getElementById("para").textContent = "Your turn";
  }
  function updateUI() {
  document.getElementById("score1").textContent = win11;
  document.getElementById("score2").textContent = win22;
  saveScores();
}


function loadScores() {
 let { p1, p2 } = getKeys();
  let x1 = sessionStorage.getItem(p1);
  let x2 = sessionStorage.getItem(p2);

  win11 = x1 ? parseInt(x1) : 0;
  win22 = x2 ? parseInt(x2) : 0;

  updateUI(); }
dropdown.addEventListener("change", function () {
  sessionStorage.setItem("choice", dropdown.value); 
  loadScores();
});


window.onload = function () {
  let saved = sessionStorage.getItem("choice");
  if (saved) {
    dropdown.value = saved;
  }
  loadScores();
};
function saveScores() {
  let { p1, p2 } = getKeys();
  sessionStorage.setItem(p1, win11);
  sessionStorage.setItem(p2, win22);
}
function doAction(id,y) {
    let value = dropdown.value;
    sessionStorage.setItem("choice", value);
    console.log(value);
     if(y==1){
    if (value === "Easy") {
      place(id);
function check(){
  for(let i=0;i<a.length;i++){
    if(buttons[a[i][0]].innerText==buttons[a[i][1]].innerText && buttons[a[i][1]].innerText==buttons[a[i][2]].innerText && buttons[a[i][2]].innerText=="X"){
document.getElementById("para").textContent=`Winner: ${p1d}(You)`;
win11+=1;
let { p1, p2 } = getKeys();
       sessionStorage.setItem(p1, win11);
       sessionStorage.setItem(p2, win22);
       document.getElementById("score1").textContent=win11;
buttons.forEach(btn => btn.disabled = true);
w=1;
}
if(buttons[a[i][0]].innerText==buttons[a[i][1]].innerText && buttons[a[i][1]].innerText==buttons[a[i][2]].innerText && buttons[a[i][2]].innerText=='O'){
document.getElementById("para").textContent=`Winner: Computer`;
win22+=1;
let { p1, p2 } = getKeys();
       sessionStorage.setItem(p1, win11);
       sessionStorage.setItem(p2, win22);
       document.getElementById("score2").textContent=win22;
buttons.forEach(btn => btn.disabled = true);
w=1;
   }
}
}

function comp(){
let r;
do {
    r = b[Math.floor(Math.random() * b.length)];
  } while (buttons[r].disabled);
return r;
}
 function changeColor() {
  
    if(player==2){
    document.body.style.background = "rgba(254, 239, 239, 1)";
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
    function ButtonsDisabled() {
  for (let i = 0; i < buttons.length; i++) {
    if (!buttons[i].disabled) {
      return false; 
    }
  }
  return true; 
}
function place(id){
   if (w === 1) return;
    if(player==1){
        document.getElementById(id).textContent='X';
        document.getElementById(id).style.color = "rgba(44, 24, 82, 1)";
        document.getElementById(id).disabled=true;
        check();
  if (w === 1) return;
  player=2;
  changeColor();
}
document.getElementById("para").textContent=`Computer's turn`;
let z=comp();
document.getElementById("overlay").style.display = "block"; // lock
setTimeout(() => {
    document.getElementById(z).textContent='O';
    document.getElementById(z).style.color = "rgba(145, 7, 0, 1)";
    document.getElementById(z).disabled = true; 
document.getElementById("para").textContent=`Your turn`;
check();
  document.getElementById("overlay").style.display = "none";
    if (w === 1) return;
player=1;
changeColor();
let but=ButtonsDisabled();
if(but==true && w==0){
  document.getElementById("para").textContent="It's a draw!";
}
}, 800);
}
    }

else{
place1(id);
function check1(){
  for(let i=0;i<a.length;i++){
    if(buttons[a[i][0]].innerText==buttons[a[i][1]].innerText && buttons[a[i][1]].innerText==buttons[a[i][2]].innerText && buttons[a[i][2]].innerText=="X"){
document.getElementById("para").textContent=`Winner: ${p1d}(You)`;
win11+=1;
let { p1, p2 } = getKeys();
       sessionStorage.setItem(p1, win11);
       sessionStorage.setItem(p2, win22);
       document.getElementById("score1").textContent=win11;
buttons.forEach(btn => btn.disabled = true);
w=1;
}
if(buttons[a[i][0]].innerText==buttons[a[i][1]].innerText && buttons[a[i][1]].innerText==buttons[a[i][2]].innerText && buttons[a[i][2]].innerText=='O'){
document.getElementById("para").textContent=`Winner: Computer`;
win22+=1;
let { p1, p2 } = getKeys();
       sessionStorage.setItem(p1, win11);
       sessionStorage.setItem(p2, win22);
       document.getElementById("score2").textContent=win22;
buttons.forEach(btn => btn.disabled = true);
w=1;
}
}
}

function comp1(){
let r;
 for (let i = 0; i < a.length; i++) {
  let b0 = buttons[a[i][0]].innerText;
    let b1 = buttons[a[i][1]].innerText;
    let b2 = buttons[a[i][2]].innerText;
    if (b0 === b1 && b0 === "O" && b2 === "") return a[i][2];
    if (b0 === b2 && b0 === "O" && b1 === "") return a[i][1];
    if (b1 === b2 && b1 === "O" && b0 === "") return a[i][0];
    if (b0 === b1 && b0 === "X" && b2 === "") return a[i][2];
    if (b0 === b2 && b0 === "X" && b1 === "") return a[i][1];
    if (b1 === b2 && b1 === "X" && b0 === "") return a[i][0];
}
 let freeCells = b.filter(i => !buttons[i].disabled); 
    if (freeCells.length === 0) return null;
   r = freeCells[Math.floor(Math.random() * freeCells.length)];
    return r;
}
function changeColor1() {
  
    if(player==2){
    document.body.style.background = "rgba(254, 239, 239, 1)";
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
function place1(id){
   if (w === 1) return;
    if(player==1){
        document.getElementById(id).textContent='X';
        document.getElementById(id).style.color = "rgba(44, 24, 82, 1)";
        document.getElementById(id).disabled=true;
        check1();
  if (w === 1) return;
  player=2;
  changeColor1();
}
document.getElementById("para").textContent=`Computer's turn`;
let z=comp1();
if (z === null) {
    document.getElementById("para").textContent = "It's a draw!";
    return;
}
document.getElementById("overlay").style.display = "block";
setTimeout(() => {
    document.getElementById(z).textContent='O';
    document.getElementById(z).style.color = "rgba(145, 7, 0, 1)";
    document.getElementById(z).disabled = true; 
document.getElementById("para").textContent=`Your turn`;
check1();
  document.getElementById("overlay").style.display = "none";
    if (w === 1) return;
player=1;
changeColor1();
}, 1000);
}
  }
     }
  else{
 resetBoard();
}
}