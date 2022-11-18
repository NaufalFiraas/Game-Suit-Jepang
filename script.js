const userSelects = document.getElementsByClassName('user-selects');
const compSelect = document.getElementById('comp-select');
const result = document.querySelector('.middle h3');
const compScore = document.getElementById('comp-score');
const userScore = document.getElementById('user-score');

for (let i = 0; i < userSelects.length; i++) {
    userSelects[i].addEventListener('click', function (event) {
        for (let j = 0; j < userSelects.length; j++) {
            if (userSelects[j].classList.contains('active')) {
                userSelects[j].classList.remove('active');
            }
        }

        this.classList.add('active');
        result.innerHTML = '.....';
        turning();
        setTimeout(() => {
            const computerSelect = getCompSelect();
            result.innerHTML = rules(computerSelect, this.id);
            scoring(result.innerHTML);
        }, 1000);
    });
}

function getCompSelect() {
    const computerSelect = Math.random();

    if (computerSelect < 0.33) {
        compSelect.setAttribute('src', `img/batu.png`);
        return 'batu';
    } else if (computerSelect > 0.33 && computerSelect <= 0.64) {
        compSelect.setAttribute('src', `img/gunting.png`);
        return 'gunting';
    } else {
        compSelect.setAttribute('src', `img/kertas.png`);
        return 'kertas';
    }
}

function rules(computerSelect, userSelect) {
    if (computerSelect === 'batu') {
        if (userSelect === 'batu') {
            return 'Game Seri!';
        } else if (userSelect === 'gunting') {
            return 'Anda Kalah!';
        } else {
            return 'Anda Menang!';
        }
    } else if (computerSelect === 'gunting') {
        if (userSelect === 'batu') {
            return 'Anda Menang!';
        } else if (userSelect === 'gunting') {
            return 'Game Seri!';
        } else {
            return 'Anda Kalah!';
        }
    } else {
        if (userSelect === 'batu') {
            return 'Anda Kalah!';
        } else if (userSelect === 'gunting') {
            return 'Anda Menang!';
        } else {
            return 'Game Seri!';
        }
    }
}

function scoring(result) {
    switch (result) {
        case 'Anda Menang!': userScore.innerHTML++;
            break;
        case 'Anda Kalah!': compScore.innerHTML++;
            break;
        default: userScore.innerHTML + 0;
    }

    if (userScore.innerHTML === '5') {
        alert('Selamat! Anda Menang!');
        location.reload();
    }
    if (compScore.innerHTML === '5') {
        alert('Maaf, Anda Kalah!');
        location.reload();
    }
}

function turning() {
    const images = ['batu', 'gunting', 'kertas'];
    const start = new Date().getTime();
    let i = 0;

    setInterval(() => {
        if (new Date().getTime() - start > 1000) {
            clearInterval;
            return;
        }
        compSelect.setAttribute('src', `img/${images[i++]}.png`);
        if (i === images.length) {
            i = 0;
        }
    }, 100);
}