var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    let times = [
        {nome: "Athletico-PR", cidade: "Curitiba", QTDtitulos: 1},
        {nome: "Atlético-MG", cidade: "Belo Horizonte", QTDtitulos: 3},
        {nome: "Atlético-GO", cidade: "Goiânia", QTDtitulos: 0},
        {nome: "Bahia", cidade: "Salvador", QTDtitulos: 2},
        {nome: "Bragantino", cidade: "Bragança Paulista", QTDtitulos: 0},
        {nome: "Botafogo", cidade: "Rio de Janeiro", QTDtitulos: 2},
        {nome: "Corinthians", cidade: "São Paulo", QTDtitulos: 7},
        {nome: "Criciúma", cidade: "Criciúma", QTDtitulos: 0},
        {nome: "Cruzeiro", cidade: "Belo Horizonte", QTDtitulos: 4},
        {nome: "Cuiabá", cidade: "Cuiabá", QTDtitulos: 0},
        {nome: "Flamengo", cidade: "Rio de Janeiro", QTDtitulos: 8},
        {nome: "Fluminense", cidade: "Rio de Janeiro", QTDtitulos: 4},
        {nome: "Fortaleza", cidade: "Fortaleza", QTDtitulos: 0},
        {nome: "Grêmio", cidade: "Porto Alegre", QTDtitulos: 2},
        {nome: "Internacional", cidade: "Porto Alegre", QTDtitulos: 3},
        {nome: "Juventude", cidade: "Caxias do Sul", QTDtitulos: 0},
        {nome: "Palmeiras", cidade: "São Paulo", QTDtitulos: 12},
        {nome: "São Paulo", cidade: "São Paulo", QTDtitulos: 6},
        {nome: "Vasco", cidade: "Rio de Janeiro", QTDtitulos: 4},
        {nome: "Vitória", cidade: "Salvador", QTDtitulos: 0}
    ]
    res.render('pages/index', {
        times: times
    })
})

app.get('/sobre', function (req, res) {
    res.render('pages/sobre')
})

app.listen(3000)
console.log('O servidor está rondando na porta 3000')