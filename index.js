import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

const app = express()
dotenv.config()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

const PORT = process.env.EXPRESS_PORT || 3000;

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

try {
    await database.authenticate();
    app.listen(PORT, () => console.log(`Server running ${PORT}`))
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use('*', (req, res) => {
    res.status(404).send('Sorry, cant find that');
})
