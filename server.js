import express from 'express'

const app = express()
app.use(express.json())

const usersList = []

app.post('/users', (req, res) => {

    usersList.push(req.body)

    res.status(201).json(req.body)
})


app.get('/users', (req, res) => {
    res.status(200).json(usersList)
})

app.listen(3000)