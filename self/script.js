let resultArea = document.getElementById("resultArea");
let inputArea = document.getElementById("inputArea");
let playButton = document.getElementById("playButton");
let resetButton = document.getElementById("resetButton");
let chanceArea = document.getElementById("chanceArea");
let randomNum = 0;
let chances = 5;
let answers = [];

//각 버튼을 누르면 event가 생기게 함
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset)
//function 을 만드면 메모리 차지가 될 수 있으니 이렇게 한 번만 쓰는 함수는 따로 함수를 만들지 않는게 좋음
inputArea.addEventListener("focus", function(){
    inputArea.value= ""
})

function computerNum(){
    randomNum = Math.floor(Math.random()*100)+1;
    console.log("정답 : ", randomNum);
}

function play(){
    let inputValue = inputArea.value;

    if (answers.includes(inputValue)){
        resultArea.textContent = "이미 입력한 숫자입니다";
        return;
    }

    if (inputValue > 100){
        resultArea.textContent = "입력한 숫자는 100보다 큽니다";
        return;
    }
    if (inputValue < 1){
        resultArea.textContent = "입력한 숫자는 1보다 작습니다";
        return;
    }
    // chance 1개씩 차감
    chances--; 

    if (inputValue == randomNum){
        resultArea.textContent = "맞췄습니다";
        disabled()
        resetButton.textContent = "다시 시작";

    }
    else if(inputValue > randomNum){
        resultArea.textContent = "DOWN";
        answers.push(inputValue);
    }
    else if(inputValue < randomNum){
        resultArea.textContent = "UP";
        answers.push(inputValue);
    }

    chanceArea.textContent = `남은 기회 : ${chances}번`

    if (chances <1){
        disabled()
        resultArea.textContent = "GAMEOVER";
    }
    
}

function reset(){
    let chances = 5;
    chanceArea.textContent = "남은 기회 : 5번"
    resetButton.textContent = "reset"
    resultArea.textContent = "UP or DOWN"
    computerNum();
}

function disabled(){
    playButton.disabled = true
}

computerNum();