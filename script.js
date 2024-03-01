//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼 누름
//만약 유저가 랜덤 번호 맞추면 

let computerNum = 0
let playbuttton = document.getElementById("playbuttton")
let userinput = document.getElementById("userinput")
let resultarea = document.getElementById("resultarea")

playbuttton.addEventListener("click", play)

function pickRandom() {
    computerNum = Math.floor(Math.random()*100)+1; //Math.random 은 0~1 까지의 숫자를 랜덤을 정하기 때문에 *100 을 곱해주고, 1-100의 범위를 위해 +1
    console.log("정답",computerNum);
}

function play(){
    let uservalue = userinput.value;
    if (uservalue < computerNum){
        resultarea.textContent = "UP"
    }
    else if (uservalue > computerNum){ㄴ
        resultarea.textContent = "Down"
    }
    else if (uservalue = computerNum){
        resultarea.textContent = "맞췄습니다"
    }
}
pickRandom()

