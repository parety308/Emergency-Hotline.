const copyNumbers = [];
let copyCount=0;
function addStore(count) {
    const store = document.getElementById('store');
    let cpy=document.getElementById('copy-count');
    cpy.innerText=count;
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
     copyCount++;
    const numb = document.getElementById(num).innerText;
    const nam = document.getElementById(title).innerText;
    const data = {
        name: nam,
        number: numb,
        time: new Date().toLocaleTimeString()
    }
    copyNumbers.push(data);
    addStore(copyCount);

}

document.getElementById('national-copy')
    .addEventListener('click', function () {
        
        getNum('national-title', 'national-num');
    });

    document.getElementById('police-copy')
    .addEventListener('click', function () {
        
        getNum('police-title', 'police-num');
    });

    document.getElementById('fire-copy')
    .addEventListener('click', function () {
        
        getNum('fire-title', 'fire-num');
    });

    document.getElementById('ambulance-copy')
    .addEventListener('click', function () {
        
        getNum('ambulance-title', 'ambulance-num');
    });

    document.getElementById('child-women-copy')
    .addEventListener('click', function () {
        
        getNum('child-women-title', 'child-women-num');
    });

    document.getElementById('anti-copy')
    .addEventListener('click', function () {
        
        getNum('anti-title', 'anti-num');
    });

    document.getElementById('electricity-copy')
    .addEventListener('click', function () {
        
        getNum('electricity-title', 'electricity-num');
    });

    document.getElementById('brac-copy')
    .addEventListener('click', function () {
        
        getNum('brac-title', 'brac-num');
    });


document.getElementById('railway-copy')
.addEventListener('click', function () {
    
    getNum('railway-title', 'railway-num');
});









document.getElementById('clear-btn')
.addEventListener('click', function(){
    document.getElementById('store').innerHTML = ""; 
    copyNumbers.length = 0; 
    copyCount = 0;    
    document.getElementById('copy-count').innerText = "0"; 
});
