
let boxes = document.querySelectorAll('.btn');
let turnX = true;
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-game-btn');
let winnerMsg = document.querySelector('.msg-container');
let msg = document.querySelector("#winner-msg");

let winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnX){
            box.innerText ='X';
            turnX = false;
        }else{
            box.innerText ='O';
            turnX = true; 
        }
        box.disabled = true;
        checkWinner()
    });
});


const resetGame = ()=>{
    turnX = true;
    enabled();
    winnerMsg.classList.add('hide');

}
const disabled = ()=>{
    for (const box of boxes) {
        box.disabled = true;
    }
};

const enabled =()=>{
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
};


const showWinner = (winner)=>{
    disabled()
    msg.innerText =`Congratulations!, Winner is ${winner}`;
    winnerMsg.classList.remove('hide');
};

const checkWinner = ()=>{
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        console.log(pos1Val);
       if (pos1Val !=='' && pos2Val !=='' && pos3Val !=='') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
               showWinner(pos1Val);
            }
        }    
    }
};

resetBtn.addEventListener('click',resetGame);
newGameBtn.addEventListener('click',resetGame);



