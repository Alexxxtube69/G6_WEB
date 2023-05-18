const token = '2828b510a80943cdbe045ebe09d8c476';
const url = 'https://api.football-data.org/v4/competitions/PD';
const options = {
    method: 'GET',
    headers: {
        'X-Auth-Token': token,
        'Content-Type': 'application/json'
    },
    mode: 'no-cors' // Opción para deshabilitar CORS
};

async function fetchLaLiga() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchLaLiga();