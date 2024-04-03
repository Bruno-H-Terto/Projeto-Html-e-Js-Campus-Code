let results = [];
async function dataStarWars(){

    let data = await fetch('https://swapi.dev/api/planets/?format=json');
    let planets = await data.json();
    results = planets.results;
 

    return results
}




async function famouspeople() {

        const button = document.getElementById('btn');
        button.disabled = true;
        button.hidden = true;
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
                var people = peopleData.residents;
                
                t(people);
                console.log(people);
            }
            i++;
        
        })
        
        }
async function t(people) {
    let point = document.getElementById('resident');
    point.innerHTML = '';
    if(people.length == 0){
        point.innerHTML= `        <tr>
        <td>Sem registro</td>
        <td>Sem registro</td>
        </tr>`
        return
    }
    
    

    let person = await people;
    person.forEach(async (p) => {
        const datap = await fetch(p);
        let innerpeople = await datap.json();
        console.log(innerpeople);
        const row = document.createElement('tr');
        row.innerHTML = `
        <tr>
            <td>${innerpeople.name}</td>
            <td>${innerpeople.birth_year}</td>
            </tr>
        `;
        
        point.appendChild(row);

    });

}