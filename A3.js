const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turn_O = true;
let count=0;
let boxes = document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let new_=document.querySelector("#new");
let tew_=document.querySelector("#reset");

const reset=()=>{
    turn_O=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn_O){
            box.setAttribute("class","box");
            box.innerText="O";
            turn_O=false;
        }
        else{
            box.setAttribute("class","box1");
            box.innerText="X";
            turn_O=true;
        }
        box.disabled=true;
        count++;
        let is_win=c_Winner();
        if(count===9 && !is_win){
            gameDraw();
        }
    });
});

const c_Winner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        // console.log(pattern[0],pattern[1],pattern[2]);
        
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                disable();
                show(pos1);
                return true;
            }
        }
    }
};

const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText="";
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const show=(winner)=>{
    function delayedEvent() {
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    }
    setTimeout(delayedEvent, 2000);
};

const gameDraw=()=>{
    function delayedEvent() {
    msg.innerText=`Match is Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    }
    setTimeout(delayedEvent, 2000);
};


new_.addEventListener("click",reset);
tew_.addEventListener("click",reset);

