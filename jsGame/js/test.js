const arrW = 6;
const arrH = 4;
const corners = [0, 200, 50, 100];

function stepP(from, to, size) {
    return (to - from) / (size - 1);
}
function diapazone(from, to, size) {
    const step = (to - from) / (size - 1);
    for (let i = )
}

(function(){
    const colors = [];
    let step = 0;

    colors[0] = [];
    step = stepP(corners[0], corners[1]);
    for (let i = 0; i < arrW; i++) {
        colors[0][i] = colors[0][0] + step * i;
    }

    colors[arrH - 1] = [];
    step = stepP(corners[3], corners[2]);
    for (let i = 0; i < arrW; i++) {
        colors[arrH - 1][i] = colors[arrH - 1][0] + step * i;
    }

    for (j = 1; j < arrW - 1; j++) {
        step = stepp();
    }


    for (let i = 0; i < arrH; i++) {
        colors[i] = [];
        for (let j = 0; j < arrW; j++) {

        }
    }
})()
