const searchBtn = document.querySelector('#search-btn');
const luckyBtn = document.querySelector('#rand-btn');

const input = document.querySelector('#input');
const resultsDiv = document.querySelector('#results');
const ul = document.querySelector('#resultsContainer');

searchBtn.addEventListener('click', search)
luckyBtn.addEventListener('click', searchLucky)

let searchResultsGlobal;

function search (e) {
    e.preventDefault();
    if (!input.value) return "Type something!";
    console.log(input.value);
    callGoogle (input.value);
};

async function callGoogle (q) {

    let youngApiKey = 'AIzaSyBg77XjHNeflTC57BDwNiSNvJjGHQMH6H0'
    let dayoApiKey = 'AIzaSyCZyGyW_no5i82zNYV-_sYyz7GLSjqvrQc'

    let url = `https://www.googleapis.com/customsearch/v1?key=${dayoApiKey}&cx=e5d862fcf3cff4a4f&gl=uk&q=${q}`

    let endPoint = `http://localhost:3000/${q}`

    const res =  await fetch(endPoint);
    const data = await res.json();
    console.log(data);
    searchResultsGlobal = data;
    displayResults ()

    return data;
};

function displayResults () {

    console.log(searchResultsGlobal.items);

    searchResultsGlobal.items.forEach(element => {

        const li = document.createElement('li');
        const title = document.createElement('p');
        const htmlTitle = document.createElement('p');
        const snippet = document.createElement('p');
        const link = document.createElement('p');
        const a = document.createElement('a');

        title.textContent = element.title;
        snippet.textContent = element.snippet;
        a.textContent = 'click here';
        a.href = element.link;

        li.append(title);
        li.append(snippet);
        li.append(a);

        ul.append(li);

    });
}

function randDomGen () {
    let randNum = Math.floor((Math.random() * searchResultsGlobal.items.length));
    console.log(randNum);
    return randNum;
}

function searchLucky (e) {
    e.preventDefault();
    console.log(searchResultsGlobal.items[randDomGen()].link)
    window.location.href = `${searchResultsGlobal.items[randDomGen()].link}`;
    
    //console.log('lucky serach')
    return;
}






