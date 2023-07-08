let refreshBtn = document.getElementById('refreshBtn');
let price = document.getElementById('price');
refreshBtn.addEventListener('click', fetchCryptocurrencies);


async function fetchCryptocurrencies(){
    const response = await fetch("https://api.coincap.io/v2/assets");
    const data = await response.json();
    price.innerText = data.data[0].priceUsd;
}