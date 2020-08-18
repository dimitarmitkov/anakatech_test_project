let tr = document.getElementById("tb1");
let td = tr.getElementsByTagName("td");
let counter = 0;
let oddCounter = 1;


function add() {
    for (let i = 1; i < td.length; i+=2) {
        let t = td[i].innerHTML;
        t = parseFloat(t) + 0.0001;
        td[i].innerHTML = t.toFixed(5);
        td[i].style.backgroundColor = "green";
    }
}

function extract() {
    for (let i = 1; i < td.length; i+=2) {
        let t = td[i].innerHTML;
        if (parseFloat(t) - 0.0001 >= 1.0001) {
            t = parseFloat(t) - 0.0001;
            td[i].innerHTML = t.toFixed(5);
            td[i].style.backgroundColor = "red";
        }
    }
}

let v = setInterval(function () {

    counter += 1;

    counter % 12 !== 0 && oddCounter % 2 !== 0 ? add():extract();

    if (counter % 12 === 0) {
        console.log(oddCounter += 1);
    }

    if (oddCounter === 6) {
        clearInterval(v);
    }
}, 5000);

setInterval();