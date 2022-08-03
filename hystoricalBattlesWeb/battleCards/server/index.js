const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getAllBattles,
    deleteBattle, 
    createBattle, 
} = require('./controller')

app.get(`/api/battles`, getAllBattles)
app.delete(`/api/battles/:id`, deleteBattle)
app.post(`/api/battles`,createBattle)


app.listen(4004, () => console.log(`running on 4004`))