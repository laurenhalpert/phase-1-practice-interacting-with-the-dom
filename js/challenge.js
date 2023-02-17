
let counter = null;
function start () {
    counter = setInterval(addOneEachSecond, 1000);
}

document.addEventListener("DOMContentLoaded", start);



function addOneEachSecond() {
    let timer = document.querySelector("#counter");
    let val = parseInt(timer.innerText, 10);
    return timer.innerText = val+1;
}



const minus = document.querySelector("#minus");

minus.addEventListener("click", decreaseOne);

function decreaseOne() {
    let timer = document.querySelector("#counter");
    let val = parseInt(timer.innerText, 10);
    return timer.innerText = val-1;
}

const plus = document.querySelector("#plus");
plus.addEventListener("click", addOne);

function addOne() {
    let timer = document.querySelector("#counter");
    let val = parseInt(timer.innerText, 10);
    return timer.innerText = val +1;
}

const like = document.querySelector("#heart");
like.addEventListener("click", likeFunction);

let timer = document.querySelector("#counter");
let val = parseInt(timer.innerText, 10);

let obj = {};


for(let i=0; i< 100000000; i++){
    obj[i] = 0;
}

function likeFunction() {
    
    let ul = document.querySelector(".likes");

    num = parseInt(timer.innerText,10);
    
    obj[num]++
    
    function ifOne() {
        if (obj[num] ===1) {
            let li = document.createElement("li");
            let x = 1;
            li.innerText= `${num} has been clicked ${x} time.`;
            li.id = `id${num}`;
            ul.appendChild(li);
        }
    }   
    
    ifOne();

    if (obj[num] > 1) {
        let li = document.querySelector(`#id${num}`);
        li.innerText = `${num} has been clicked ${obj[num]} times.`
    }

    
} 


let form = document.querySelector("#comment-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit (event) {
    event.preventDefault();

    buildCommentList(event.target["comment-input"].value);
    
} 

function buildCommentList(comment) {
    let p = document.createElement("p");
    let commentList = document.querySelector("#list");
    p.innerText= `${comment}`;
    commentList.appendChild(p);
}

let pauseResume= document.querySelector("#pause");
pauseResume.addEventListener("click", pause)

function pause() {
    let pauseResume = document.querySelector("#pause");
    if (counter) {
        clearInterval(counter)
        counter =null
        minus.setAttribute("disabled", true);
        plus.setAttribute("disabled", true);
        like.setAttribute("disabled", true);
        document.querySelector("#submit").setAttribute("disabled", true);
        pauseResume.innerText = "resume";
    } else {
        start();
        minus.removeAttribute("disabled");
        plus.removeAttribute("disabled");
        like.removeAttribute("disabled");
        document.querySelector("#submit").removeAttribute("disabled", true);
        pauseResume.innerText = "pause";
    }
    
    
    
}  

