let order = [];
let clickedOrder = [];
let matchScore = document.getElementById('score-game');
let score = 0;

// 0 = verder 1 = vermelho  2 = amarelo 3 = azul

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

let randomOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    

    for(let i in order){
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
     number = number * 1000;
    setTimeout(() => {
        element.classList.add('selected');
    }, number);

    setTimeout(() => {
        element.classList.remove('selected');
    }, number + 500);
}

let checkOrder = () => {
    for(i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        matchScore.innerHTML = score;
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createElement(color).classList.add('selected');

    setTimeout(() => {
        createElement(color).classList.remove('selected');
        checkOrder();
    }, 250)

    
}

let createElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

let nextLevel = () => {
    score ++;
    randomOrder();
}

let lose = () => {
    alert(`Score: ${score}\n Você perdeu o jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    score = 0;
    matchScore.innerHTML = score;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();