const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/item', (req, res) => {
    res.send(`<li>Item: ${Math.random()}</li>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
