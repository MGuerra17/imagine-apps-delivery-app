import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import pkg from 'pg'
import { AUTH_ENDPOINTS } from './constants.js'
import { API_ENPOINTS } from './constants.js'
import { loginController } from './controllers/auth.js'
import {
  createDeliveryController,
  deleteDeliveryController,
  getDeliveriesController,
  getDeliveryController,
  updateDeliveryController
} from './controllers/deliveries.js'
import { validateToken } from './middlewares/auth.js'

dotenv.config()

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

export const pool = new pkg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

pool.connect((err, client, done) => {
  if (err) return console.error('Database connection error:', err)

  return console.log('Database connection successful!')
})

// Endpoint para iniciar sesión
app.post(AUTH_ENDPOINTS.LOGIN, loginController)

// Endpoint para obtener todos los registros
app.get(API_ENPOINTS.GET_ALL_DELIVERIES, validateToken, getDeliveriesController)

// Endpoint para obtener un registro específico
app.get(API_ENPOINTS.GET_DELIVERY, validateToken, getDeliveryController)

// Endpoint para crear un nuevo registro
app.post(API_ENPOINTS.CREATE_DELIVERY, validateToken, createDeliveryController)

// Endpoint para modificar un registro
app.put(API_ENPOINTS.UPDATE_DELIVERY, validateToken, updateDeliveryController)

// Endpoint para eliminar un registro
app.delete(
  API_ENPOINTS.DELETE_DELIVERY,
  validateToken,
  deleteDeliveryController
)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
