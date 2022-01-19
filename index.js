import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import database from './config/database.js'

import reservationsRouter from './routes/reservation.route.js'
import roomsRouter from './routes/room.route.js'
import promosRouter from './routes/promo.route.js'

const app = express()
dotenv.config()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

const PORT = process.env.EXPRESS_PORT || 3000;

try {
    await database.authenticate();
    app.listen(PORT, () => console.log(`Server running ${PORT}`))
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


app.use('/reservations', reservationsRouter)
app.use('/rooms', roomsRouter)
app.use('/promos', promosRouter)

app.use('/', (req, res) => {
    res.status(404).send('Sorry, cant find that');
})
