let results = [];
async function dataStarWars(){

    let data = await fetch('https://swapi.dev/api/planets/?format=json');
    let planets = await data.json();
    results = planets.results;
    console.log(results[0]);

    return results
}




async function famouspeople() {

        const results = await dataStarWars();
        const url = document.location.href;
        const params = url.split('?')[1];

        const data = {};
        const pairs = params.split('&');

        pairs.forEach(async function(pair) {
            const parts = pair.split('=');
            data[parts[0]] = decodeURIComponent(parts[1]);
        });

        let i = 1;
        results.forEach(async (planet) => {
            if (planet.name === data.name) {
                const response = await fetch(`https://swapi.dev/api/planets/${i}/?format=json`);
                const peopleData = await response.json();
                const people = peopleData.residents;
                
            }})}
async function t(people) {
    let person = await people;
    let point = document.getElementById('resident');
    console.log(person);

    person.forEach(p => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p.name}</td>
            <td>${p.birth_year}</td>
        `;
        point.appendChild(row);
    });
}