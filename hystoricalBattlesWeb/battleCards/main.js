const battleContainer = document.querySelector('#battle-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/battles`

const battleCallback = ({ data: battles }) => displayBattles(battles)
const errCallback = err => console.log(err)

const getAllBattles = () => axios.get(baseURL).then(battleCallback).catch(errCallback)
const createBattle = body => axios.post(baseURL, body).then(battleCallback).catch(errCallback)
const deleteBattle = id => axios.delete(`${baseURL}/${id}`).then(battleCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()


    let result = document.querySelector('#result')
    let casulties = document.querySelector('#casulties')
    let nameOfBattle = document.querySelector('#nameOfBattle')
    let location = document.querySelector('#location')
    let imageURL = document.querySelector('#img')
    let date = document.querySelector('#date')

    let bodyObj = {
        imageURL: imageURL.value,
        casulties: casulties.value,
        result: result.value,
        location: location.value,
        date: date.value,
        nameOfBattle: nameOfBattle.value
    }

    createBattle(bodyObj)

    casulties.value = ''
    location.value = ''
    result.value = ''
    imageURL.value = ''
    date.value = ''
    nameOfBattle.value = '' 

}

function createBattleCard(battle) {
    const battleCard = document.createElement('div')
    battleCard.classList.add('battle-card')

    battleCard.innerHTML = `<img alt='battle cover image' src=${battle.imageURL} class="battle-cover-image"/>
    <p class="battle-name-Of-Battle"> ${battle.nameOfBattle}</p>
    <p class="battle-result"> ${battle.result}</p>
    <p class="battle-casulties">${battle.casulties}</p>
    <p class="battle-location">${battle.location}</p>
    <p class="battle-date">${battle.date}</p>
    <button onclick="deleteBattle(${battle.id})">delete</button>
    `


    battleContainer.appendChild(battleCard)
}

function displayBattles(arr) {
    battleContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createBattleCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllBattles()