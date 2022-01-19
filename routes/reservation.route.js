import express from "express"
import { addReservation, getReservationByID, addPromoReservation } from "../controllers/reservation.controller.js"

const router = express.Router()

router.get('/:id', getReservationByID)
router.post('/book', addReservation)
router.post('/set-promo', addPromoReservation)

export default router