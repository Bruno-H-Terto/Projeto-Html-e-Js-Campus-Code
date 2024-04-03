let point= document.getElementById('point');
let results = [];

async function dataStarWars(){
    const button = document.getElementById('btn1');
    button.disabled = true;
    button.hidden = true;

    point.innerHTML = '';

    let data = await fetch('https://swapi.dev/api/planets/?format=json');
    let planets = await data.json();
    results = planets.results;
    console.log(results);
   
    return results
}

async function planets(){
    results = await dataStarWars();

    let i = 0;
    results.forEach(planet => {
        let btn = document.createElement('button');
        btn.innerHTML = `
        <button onclick="dataPlanet(${i})">${planet.name}</button>
        `;

        point.appendChild(btn);

        i++;
    });
    
}

function dataPlanet(i){
    let index = document.getElementById('res');
    let list = document.createElement('ul');

    index.innerHTML='';

    list.innerHTML = `
        <ul>
            <li>Nome: ${results[i].name}</li>
            <li>Clima: ${results[i].climate}</li>
            <li>População: ${results[i].population}</li>
            <li>Terreno: ${results[i].terrain}</li>
        </ul>`;

    index.appendChild(list);
}


function keypress(){
    event.preventDefault();
    newpage();

};

async function newpage() {
    const formData = new FormData(document.getElementById('Researches'));
    const planetname = formData.get('Search');

    results = await dataStarWars();

    results.forEach((planet) => {
        if (planet.name === planetname) {
            
            const url = 'show.html?' +
                'name=' + encodeURIComponent(planetname) + '&' +
                'climate=' + encodeURIComponent(planet.climate) + '&' +
                'population=' + encodeURIComponent(planet.population) + '&' +
                'terrain=' + encodeURIComponent(planet.terrain);

           
            window.location.href = url;
        }
    });

    const button = document.getElementById('btn1');
    button.disabled = false;
    button.hidden = false;

    document.getElementById('res').innerText = 'Planeta não localizado!'
}