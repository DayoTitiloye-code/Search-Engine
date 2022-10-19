const fetch = require('node-fetch');

async function callGoogle (q) {

    let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBg77XjHNeflTC57BDwNiSNvJjGHQMH6H0&cx=e5d862fcf3cff4a4f&gl=uk&q=${q}`
    const res =  await fetch(url);
    const data = await res.json();
    return data;
}


module.exports = { callGoogle }
