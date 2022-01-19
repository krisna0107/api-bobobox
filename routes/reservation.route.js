import express from "express"
import { createReservation, getReservationByID, addPromoReservation } from "../controllers/reservation.controller.js"

const router = express.Router()

router.get('/:id', getReservationByID)
router.post('/book', createReservation)
router.post('/set-promo', addPromoReservation)

export default router