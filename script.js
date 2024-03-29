const BASE_URL = "https://rest.coinapi.io/v1/exchangerate/USD?filter_asset_id=BTC,DOGE,ETH&invert=true";
const API_KEY = "49549CF9-C936-4AA8-9752-AB207803EE00";
const ASSET_ID_BASE = "BTC";
const ASSET_ID_QUOTE = "/USD";

async function getData() {
    const response = await fetch(BASE_URL, {
        headers: {
            'Accept': 'application/json',
            'X-CoinAPI-Key': API_KEY,
        },
    });


    const data = await response.json();

    document.getElementById("bitcoin").innerHTML = data.rates[0].rate.toPrecision(7);
    document.getElementById("dogecoin").innerHTML = data.rates[1].rate.toPrecision(7);
    document.getElementById("ethereum").innerHTML = data.rates[2].rate.toPrecision(7);
}

getData();


