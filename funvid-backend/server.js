
const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors')
const Videos = require('./dbModel')

//app config
const app = express()
const port = process.env.PORT || 9000;

//middlewares
app.use(Cors())
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Acess-Control-Allow-Origin', "*"),
        res.setHeader('Acess-Control-Allow-Headers', "*"),
        next();

})


//Dbconfig
const connection_url = 'mongodb+srv://admin:zWcCe5ql8dOAY1SO@cluster0.gdh2t.mongodb.net/<FunVid>?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

})

//api endpoint

app.get('/', (req, res) => res.status(200).send('hello sir'))
app.get('/v1/post', (req, res) => res.status(200).send(data))
app.get('/v2/post', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

app.post('/v2/post', (req, res) => {
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})






// app listners

app.listen(port, () => console.log(`listening on localhost:${port}`))










//zWcCe5ql8dOAY1SO



//mongodb+srv://admin:zWcCe5ql8dOAY1SO@cluster0.gdh2t.mongodb.net/FunVid?retryWrites=true&w=majority