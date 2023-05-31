const SUPERHERO_TOKEN = '2536278996512643'
const BASE_URL = `https://superheroapi.com/api.php/${2536278996512643}`

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const getNewHero = document.getElementById('getNewHero');
const heroImage = document.getElementById('heroImage');
const heroName = document.getElementById('heroName');
const heroStats = document.getElementById('heroStats');

const showHeroInfo = (character) =>{
    const name = `<h2> ${character.name}</h2>`
    const img = `<img src='${character.image.url}' height = 400 width = 400/>`

    const stats = Object.keys(character.powerstats).map(stat =>{
        return `<p>${stat.toUpperCase()}:${character.powerstats[stat]}</p>`
    }).join(' ')

    heroImage.innerHTML = ` ${img}`
    heroName.innerHTML = `${name}`
    heroStats.innerHTML = `${stats}`
}

const getSuperHero = (id,name) => {
    fetch(`${BASE_URL}/${id}`).then((response) =>response.json()).
    then(json => {console.log(json.powerstats);
    const getSuperHero = json
    showHeroInfo(getSuperHero)
    })
}

const searchSuperHero = (name) =>{
    console.log(searchInput.value)

    fetch(`${BASE_URL}/search/${name}`).then((response) => response.json()).
    then(json => {
        const hero = json.results[0]
        showHeroInfo(hero)
    })
}

const randomHero = () =>{
    const numberOfHeros = 731

    return Math.floor(Math.random() * numberOfHeros) + 1
}

getNewHero.onclick = () =>getSuperHero(randomHero())

searchButton.onclick = () =>searchSuperHero(searchInput.value)