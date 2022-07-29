const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3400;

const visitorRouter = require('./src/routes/visitorsRoutes')
const appsRouter = require('./src/routes/appsRoutes')
const adsRouter = require('./src/routes/adsRoutes')
require('./src/db/connection')


app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'hello world'
    })
})

app.use('/api', visitorRouter)
app.use('/api', appsRouter)
app.use('/api', adsRouter)


app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})