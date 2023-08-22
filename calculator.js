function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}


// 無意味なボタンのクリックイベント
function meaninglessButton() {
    // 音を鳴らす
    const sound = document.getElementById('sound');
    sound.play();
}

// ボタンの虹色ルーレットを始める
function startRainbow() {
    const button = document.querySelector('.meaningless-button');
    button.style.animation = 'rainbow 1s infinite';
}

// 虹色ルーレットを止める
function stopRainbow() {
    const button = document.querySelector('.meaningless-button');
    const computedStyle = window.getComputedStyle(button);
    button.style.animation = '';
    button.style.backgroundColor = computedStyle.backgroundColor;
}