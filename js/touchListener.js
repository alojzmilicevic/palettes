let h = 90;
let s = 33;
let l = 71;
let a = 1;

function rand(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function change_color() {
    for (let i = 0; i < 4; ++i) {
        let elem = document.getElementById(`c${i + 1}`);
        elem.style.backgroundColor = `hsla(${((h + i * 90) + h) % 360},${s}%,${l}%,${a * Math.random()})`;
    }

    h = (h + rand(360)) % 360;
    l = (l + rand(90)) % 100;
    s = (s + rand(90)) % 100;
}