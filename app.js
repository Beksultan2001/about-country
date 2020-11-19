'use strict';


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const country = document.getElementById('country')
const trye = document.getElementById('try')
const number  = document.getElementById('number')
const speak  = document.getElementById('speak');
const currency = document.getElementById('currency');
const number1  = document.getElementById('number1')
const speak1  = document.getElementById('speak1');
const currency1 = document.getElementById('currency1');
const flag = document.getElementById('flag');
const main = document.getElementById('main');
const lastone = document.getElementById('last')
// background: url(flag.jpg) center center/cover no-repeat;

// ////////////////////////////////////////////////////
const request = new XMLHttpRequest();
var t = prompt()
var search = `${t}`;
request.open('GET',`https://restcountries.eu/rest/v2/name/${
    search
}`);
request.send();
console.log(request.responseText)
request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText)
    console.log(data)
    flag.style.background = `url(${data.flag}) center center/cover no-repeat`;
    flag.style.background =  'cover';
    console.log(data.languages[0].name)
    speak1.innerHTML = data.languages[0].name;
    country.innerHTML = data.name;
    trye.innerHTML = data.region;
    number1.innerHTML = `${(+data.population/1000000).toFixed(1)}M people`;
    currency1.innerHTML = data.currencies[0].name;
    var numbers = data.borders.length;
    for (var i = 0 ;i<numbers;i++){

        border(data.borders[i]);
    }

})

function border(borders){
    const request2 = new XMLHttpRequest();
    request2.open('GET',`https://restcountries.eu/rest/v2/alpha/${borders}`)
    request2.send();
    request2.addEventListener('load',function(){
        const data2 = JSON.parse(this.responseText)
        console.log(data2)
        var ty = `url(${data2.flag}) center center/cover no-repeat`;
        var population = `${(+data2.population/1000000).toFixed(1)}M people`;
        // speak.innerHTML = data2.languages[0].name;
        // currency.innerHTML = data2.currencies[0].name
        just(ty,data2.name,data2.region);
    })
}

function just(ty,country,region){
    // number.innerHTML = population;
    var koremiz = document.createElement('div');
    var anything = document.createElement('div');
    koremiz.classList.add('koremiz')
    koremiz.style.position = 'relative';
    anything.style.position = 'absolute';
    anything.classList.add("justtry");
    anything.innerText = 'Borders with'
    lastone.classList.add('show')
    var programm = document.createElement('div');
    programm.classList.add("container");
    koremiz.appendChild(anything);
    var flag1 = document.createElement('div');
    flag1.style.background = ty;
    var countryname = document.createElement('div');
    var region1 = document.createElement('div');
    // var list = document.createElement('ul');
    // list.appendChild(number)
    // list.appendChild(speak)
    // list.appendChild(currency)
    // list.classList.add('list');
    region1.classList.add('try');
    region1.innerHTML = region;
    countryname.classList.add('country')
    countryname.innerHTML = country;
    flag1.style.background = ty;
    flag1.classList.add('flag')
    programm.appendChild(flag1);
    programm.appendChild(countryname);
    programm.appendChild(region1)
    // programm.appendChild(list)
    koremiz.appendChild(programm)
    main.appendChild(koremiz);
}






// programm.innerText = field.value;
//             programm.style.background = 'red'
//             container.appendChild(programm);
//             field.value = '';
//             // programm.addEventListener('click',function(){
//             //     
//             // });
//             var programm2 = document.createElement('button');
//             programm2.innerText = 'destroy';
//             container.appendChild(programm2);
            
    
//             var programm3 = document.createElement('button');
//             programm3.innerText = 'dont need;';
//             container.appendChild(programm3);
//             programm3.addEventListener('click',function(){
//                 programm.style.textDecoration = 'line-through'
//             })
//             var programm4 = document.createElement('button');
//             programm4.innerText = 'need;';
//             container.appendChild(programm4);
//             programm4.addEventListener('click',function(){
//                 programm.style.textDecoration = 'none'
//             })