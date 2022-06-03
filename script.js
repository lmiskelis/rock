"use strict"

const rock=document.getElementsByClassName("rock")[0]
const paper=document.getElementsByClassName("paper")[0]
const scissors=document.getElementsByClassName("scissors")[0]
const compRock=document.getElementsByClassName("comp-rock")[0]
const compPaper=document.getElementsByClassName("comp-paper")[0]
const compScissors=document.getElementsByClassName("comp-scissors")[0]
const start=document.getElementsByClassName("start")[0]
const scoreboard=document.getElementsByClassName("scoreboard")[0]
const span = document.getElementsByClassName("close")[0]
const modal = document.getElementById("myModal")
const modalText = document.getElementsByClassName("modal-text")[0]
let pasirinktas=5
let zmogausPasirinktas=5
let scoreComputer=0
let scorePlayer=0

function clcikHand(x){
x.addEventListener("click",function(){
    rock.classList.remove("picked")
    paper.classList.remove("picked")
    scissors.classList.remove("picked")
    x.classList.add("picked")
    if (x==rock) {
        zmogausPasirinktas=0
    }
    else if(x==paper){
    zmogausPasirinktas=1}
    else if(x==scissors){
        zmogausPasirinktas=2
    }

})
}


clcikHand(rock)
clcikHand(paper)
clcikHand(scissors)


function computerPicks(){
     pasirinktas=Math.floor(Math.random() * 3)
    if(pasirinktas===0){
        compRock.classList.add("picked")
    compPaper.classList.remove("picked")
    compScissors.classList.remove("picked")
    }
    else if(pasirinktas===1){
  compPaper.classList.add("picked")
    compRock.classList.remove("picked")
    compScissors.classList.remove("picked")
    }
    else if(pasirinktas===2){
  compScissors.classList.add("picked")
    compRock.classList.remove("picked")
    compPaper.classList.remove("picked")
    }
    return pasirinktas
}
    
start.addEventListener("click", function(){
        
loadScoreBoard()
    
    if (zmogausPasirinktas!=5){
    computerPicks()
    results(pasirinktas,zmogausPasirinktas)
    loadScoreBoard()
    reset()
    }
    else{
        alert("Pasirink ranką")
    }
})



function results(computerPick,Humanpick){
    if(computerPick===Humanpick){
        modalText.innerHTML=`<h2>Lygios! Bandyk dar kartą gal pasiseks.</h2`
        modal.style.display = "block";
    }
    else if((computerPick===0 && Humanpick===2)||(computerPick===1 &&Humanpick===0)||(computerPick===2 && Humanpick===1)){
       modalText.innerHTML=`<h2>Pralaimėjai!Varyk vėl negali leisti kompiuteriui laimet.</h2`
        modal.style.display = "block";
        scoreComputer++
    }
    else if((computerPick===1 && Humanpick===2)||(computerPick===2 &&Humanpick===0)||(computerPick===0 && Humanpick===1)){
        modalText.innerHTML=`<h2>Laimėjei!Tu nenugalimas varyk vėl kad tai parodytum.</h2`
        modal.style.display = "block";
        scorePlayer++
    }
}

function loadScoreBoard(){
scoreboard.innerHTML=`<p>Score:</p>
        <p>Computer:${scoreComputer}</p>
        <p>Player:${scorePlayer}</p>`
}


function reset(){
    rock.classList.remove("picked")
    paper.classList.remove("picked")
    scissors.classList.remove("picked")
     pasirinktas=5
 zmogausPasirinktas=5
}



span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}