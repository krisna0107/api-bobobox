import express from "express"
import { getPromoList } from "../controllers/promo.controller.js"

const router = express.Router()

router.get('/', getPromoList)

export default router