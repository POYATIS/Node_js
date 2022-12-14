const express = require('express');

const app = express()
const path = require('path')

//setting 
app.set('port', 3000)


//middelwares
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.get('/', (req,res) => {
    res.send('bienvenidos')
})

app.listen(app.get('port'), () => {
    console.log(`app corriendo ${app.get('port')}`)
})
