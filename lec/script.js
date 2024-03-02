let computerNum = 0;
let playbuttton = document.getElementById("playbuttton");
let userinput = document.getElementById("userinput");
let resultarea = document.getElementById("resultarea");
let resetbutton = document.getElementById("resetbutton");
let chances = 5;
let gameover = false;
let chancearea = document.getElementById("chancearea")
let history = []

playbuttton.addEventListener("click", play)
resetbutton.addEventListener("click", reset)
userinput.addEventListener("focus", function(){
    userinput.value =""})

function pickRandom() {
    computerNum = Math.floor(Math.random()*100)+1; //Math.random 은 0~1 까지의 숫자를 랜덤을 정하기 때문에 *100 을 곱해주고, 1-100의 범위를 위해 +1
    console.log("정답",computerNum);
}

function play(){
    let uservalue = userinput.value;

    if (uservalue>100 || uservalue < 1){
        resultarea.textContent = "1과 100 사이 숫자를 입력해주세요";
        return;
    }
    if (history.includes(uservalue)){
        resultarea.textContent = "이미 입력한 숫자 입니다. 다른 숫자를 입력하세요"
        return;
    }

    chances --;
    chancearea.textContent=`남은기회 : ${chances}번`
    console.log("chance", chances)
    if (uservalue < computerNum){
        resultarea.textContent = "UP"
    }
    else if (uservalue > computerNum){ㄴ
        resultarea.textContent = "Down"
    }
    else if (uservalue = computerNum){
        resultarea.textContent = "맞췄습니다"
        gameover == true;
    }
    history.push(uservalue)

    if (chances < 1){
        gameover = true
    }
    if (gameover == true){
        playbuttton.disabled = true ;
    }
}
function reset(){
    userinput.value=""
    pickRandom();
    resultarea.textContent="결과값이 여기 나옵니다";
    chances = 5;
    chancearea.textContent="남은기회 : 5번"
}



pickRandom()

