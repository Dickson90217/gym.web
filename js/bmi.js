const nameEl = document.querySelector('#name');
const heightEl = document.querySelector('#height');
const weightEl = document.querySelector('#weight');
const bmiBtn = document.querySelector('#bmi-btn');
const comments = [
    { 'bmi': 18.5, 'comment': '體重過輕' },
    { 'bmi': 24, 'comment': '健康體位' },
    { 'bmi': 35, 'comment': '體位異常' },
];

function GetBmi(height, weight, point = 2) {
    let Bmi = weight / (height / 100) ** 2;
    return Bmi.toFixed(point);

};



bmiBtn.addEventListener('click', () => {
    console.log(heightEl, weightEl, nameEl);
    let bmi = GetBmi(heightEl.value, weightEl.value)

    if (height.value == '' || weightEl.value == '') {

        alert(`未輸入完成`)
        return;
    }
    let bmiComment = '體位異常';
    for (let i = 0; i < comments.length; i++) {
        if (bmi <= comments[i]['bmi']) {
            bmiComment = comments[i]['comment'];
            break;
        }
    }


    alert(`${nameEl.value} bmi=${bmi}`)
    document.querySelector('#result').innerText = `bmi=${bmi},${bmiComment}`
});