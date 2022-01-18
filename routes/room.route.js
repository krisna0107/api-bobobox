import express from "express"
import { getRoomAvailability } from "../controllers/room.controller.js"

const router = express.Router()

router.get('/searching', getRoomAvailability)

export default router