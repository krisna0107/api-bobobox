import express from "express"
import { getReservationByID } from "../controllers/reservation.controller.js"

const router = express.Router()

router.get('/:id', getReservationByID)

export default router