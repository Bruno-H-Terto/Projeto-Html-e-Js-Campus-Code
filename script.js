let point= document.getElementById('point');
let results = [];
async function dataStarWars(){

    let data = await fetch('https://swapi.dev/api/planets/?format=json');
    let planets = await data.json();
    results = planets.results;
    console.log(results[0]);
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
        </ul>
    `
    index.appendChild(list)
}