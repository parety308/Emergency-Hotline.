const copyNumbers = [];
let copyCount = 0;
let coinCount = 100;
let heartCount = 0;
function copy_Count() {
    copyCount++;
    let cpy = document.getElementById('copy-count');
    cpy.innerText = copyCount;

}
function addStore() {
    const store = document.getElementById('store');
    coinCount -= 20;
    const totalCoin = document.getElementById('coin-count');
    totalCoin.innerText = coinCount;
    store.innerHTML = "";

    for (const num of copyNumbers) {
        store.innerHTML += `
            <div class=" text-xl shadow-lg flex justify-between mt-4 p-5  rounded-2xl bg-gray-200 items-center" >
            <div>
             <h1 class="text-xl font-semibold">${num.name}</h1>

             <h1 class="text-xl">${num.number}</h1>
             </div>
            <div>
            <h1>${num.time}</h1>
            </div>         
            </div>
        `;
    }
}

function getNum(title, num) {
    const numb = document.getElementById(num).innerText;
    const nam = document.getElementById(title).innerText;
    const data = {
        name: nam,
        number: numb,
        time: new Date().toLocaleTimeString()
    }
    copyNumbers.push(data);
    addStore();
}

document.getElementById('national-copy')
    .addEventListener('click', function () {
        copy_Count()

    });

document.getElementById('police-copy')
    .addEventListener('click', function () {
        copy_Count()

    });

document.getElementById('fire-copy')
    .addEventListener('click', function () {
        copy_Count()

    });

document.getElementById('ambulance-copy')
    .addEventListener('click', function () {
        copy_Count()

    });

document.getElementById('child-women-copy')
    .addEventListener('click', function () {
        copy_Count()

    });

document.getElementById('anti-copy')
    .addEventListener('click', function () {
        copy_Count()

    });

document.getElementById('electricity-copy')
    .addEventListener('click', function () {
        copy_Count()

    });

document.getElementById('brac-copy')
    .addEventListener('click', function () {
        copy_Count()

    });


document.getElementById('railway-copy')
    .addEventListener('click', function () {
        copy_Count()

    });
document.getElementById('clear-btn')
    .addEventListener('click', function () {
        document.getElementById('store').innerHTML = "";
        copyNumbers.length = 0;
        copyCount = 0;
        document.getElementById('copy-count').innerText = "0";
    });

//Call Functionality
document.getElementById('national-call')
    .addEventListener('click', function () {
        if (coinCount < 20) {
            alert('You do not have enough balance. You need at least 20 Coin to make a call.');
            return;
        }
        alert('Calling National Emergency Number 999.. ');
        getNum('national-title', 'national-num');
    });

document.getElementById('police-call')
    .addEventListener('click', function () {
        if (coinCount < 20) {
            alert('You do not have enough balance. You need at least 20 Coin to make a call.');
            return;
        }
        alert('Calling Police Helpline Number 999...');
        getNum('police-title', 'police-num');
    });

document.getElementById('fire-call')
    .addEventListener('click', function () {
        if (coinCount < 20) {
            alert('You do not have enough balance. You need at least 20 Coin to make a call.');
            return;
        }
        alert('Calling Fire Service Number 999...');
        getNum('fire-title', 'fire-num');
    });

document.getElementById('ambulance-call')
    .addEventListener('click', function () {
        if (coinCount < 20) {
            alert('You do not have enough balance. You need at least 20 Coin to make a call.');
            return;
        }
        alert('Ambulance Service 1994-999999..');
        getNum('ambulance-title', 'ambulance-num');
    });

document.getElementById('child-women-call')
    .addEventListener('click', function () {
        if (coinCount < 20) {
            alert('You do not have enough balance. You need at least 20 Coin to make a call.');
            return;
        }
        alert('Calling Women & Child Helpline 109...')
        getNum('child-women-title', 'child-women-num');
    });

document.getElementById('anti-call')
    .addEventListener('click', function () {
        if (coinCount < 20) {
            alert('You do not have enough balance. You need at least 20 Coin to make a call.');
            return;
        }
        alert('Calling Anti-Corruption Helpline 106...')
        getNum('anti-title', 'anti-num');
    });

document.getElementById('electricity-call')
    .addEventListener('click', function () {
        if (coinCount < 20) {
            alert('You do not have enough balance. You need at least 20 Coin to make a call.');
            return;
        }
        alert('Calling Electricity Helpline 16216....')
        getNum('electricity-title', 'electricity-num');
    });

document.getElementById('brac-call')
    .addEventListener('click', function () {
        if (coinCount < 20) {
            alert('You do not have enough balance. You need at least 20 Coin to make a call.');
            return;
        }
        alert('Calling Brac Helpline 16445...')
        getNum('brac-title', 'brac-num');
    });


document.getElementById('railway-call')
    .addEventListener('click', function () {
        if (coinCount < 20) {
            alert('You do not have enough balance. You need at least 20 Coin to make a call.');
            return;
        }
        alert('Calling Bangladesh Railway Helpline 163.. ');
        getNum('railway-title', 'railway-num');
    });

const hearts = document.getElementsByClassName('heart-count');

for (const heart of hearts) {
    console.log(heart);
    heart.addEventListener('click', function () {
        heartCount++;
        let heart_ = document.getElementById('love-count');
        heart_.innerText = heartCount;
    });
}

