let counter = 0,
    plus = 0;


document.querySelector('#start').addEventListener('click', function () {
    plusSec = setInterval(plusSec, 1000);
    plusMin = setInterval(plusMin, 60000);

    function plusSec() {
        let sec = document.querySelector('#sec');
        counter++;
        if (counter <= 9) {
            sec.textContent = `0${counter}`
        } else {
            if (counter == 60) {
                counter = 0
                sec.textContent = counter;
            } else {
                sec.textContent = counter;
            }
        }
    }

    function plusMin() {
        let min = document.querySelector('#min');
        plus++;
        if (plus <= 9) {
            min.textContent = `0${plus}`
        } else {
            if (plus == 60) {
                plus = 0
                min.textContent = plus;
            } else {
                min.textContent = plus;
            }
        }
    }
    document.querySelector('#stop').addEventListener('click', function () {
        clearInterval(plusMin);
        console.log(plusMin)
        clearInterval(plusSec);
    });
    document.querySelector('#reset').addEventListener('click', function () {
        counter = 0;
        plus = 0;
        clearInterval(plusMin);
        min.textContent = `0${plus}`
        clearInterval(plusSec);
        sec.textContent = `0${counter}`
    });
});