const battles = require('./db.json')
let globalId = 2

module.exports = {
    getAllBattles: (req, res) => res.status(200).send(battles),
    deleteBattle: (req, res) => {
        let index =battles.findIndex(elem => elem.id === +req.params.id)
        battles.splice(index, 1)
        res.status(200).send(battles)
    },
    createBattle: (req, res) => {
        let { imageURL, casulties, nameOfBattle, result, location, date } = req.body
        let newBattle = {
            id: globalId,
            nameOfBattle,
            result,
            date,
            location,
            casulties,
            imageURL
        }
        battles.push(newBattle)
        res.status(200).send(battles)
        globalId++
    }
}