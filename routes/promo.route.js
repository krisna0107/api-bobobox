import express from "express"
import { getPromoByVOC } from "../controllers/promo.controller.js"

const router = express.Router()

router.post('/claim', getPromoByVOC)

export default router