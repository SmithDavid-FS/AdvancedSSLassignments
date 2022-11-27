const express = require('express')
const app = express()

app.get('/products/all', (request, response) => {
    response.send('GET Products: 2, Price, Description')
})

app.get('/products/:productId', (request, response) => {
    response.send('GET Products: ' + request.params.productId)
})

app.get('/products/:productId-:productName', (request, response) => {
    response.send('GET Products: ' + request.params.productId + request.params.productName)
})

app.listen(3000)