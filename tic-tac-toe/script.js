console.log("WELCOME");
let turn_music = new Audio("move.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
playgame();

//FUNCTION TO CHANGE TURN
const changeturn = () => {
    if(turn == "X")
        return "0";
    else return "X";
}

//FUNCTION TO CHECK WIN
function checkwin(){    
    let wins = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[7,5,3],[1,4,7],[2,5,8],[3,6,9]];
    for(let i=0;i<wins.length;i++){
        let boxtext = document.querySelectorAll('.boxtext');
        if(boxtext[wins[i][0]-1].innerText == boxtext[wins[i][1]-1].innerText && 
            boxtext[wins[i][1]-1].innerText == boxtext[wins[i][2]-1].innerText && boxtext[wins[i][0]-1].innerText!=''){
            let winner = '';
            if(turn == "X") {
                winner = "PLAYER 2";
            }else {
                winner = "PLAYER 1";
            }
            document.querySelector(".gameInfo h1").innerText = winner + " WON !";
            gameover.play();
            return;
        }
        document.querySelector(".gameInfo h1").innerText = "TURN FOR " + turn;
    }
}

//GAME LOGIC
function playgame(){
    let pixels = document.getElementsByClassName("pixels");
    for(let i=0;i<pixels.length;i++){
        let ele = pixels[i];
        let boxtext = ele.querySelector('.boxtext');
            ele.addEventListener('click' , ()=>{
                if(boxtext.innerText === ''){
                    boxtext.innerText = turn; 
                    turn = changeturn();
                    checkwin();
                    turn_music.play();
                }
            })
    }
}

let reset = document.querySelector('#reset');

reset.addEventListener("click" , function(){
    let boxtext = document.querySelectorAll('.boxtext');
    for(let i=0;i<boxtext.length;i++){
        boxtext[i].innerText = '';
    }
})