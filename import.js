const url = 'https://odds.p.rapidapi.com/v4/sports?all=true';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59d06f73a2mshc8e010ab39bf2ecp13de90jsn37539048267a',
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};
fetchFulbo()
async function fetchFulbo() {
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

