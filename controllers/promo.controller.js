import Promo from "../models/promo.model.js"
import { Op } from 'sequelize';
import { getHistoryPromoByUserIDAndPromoID } from "./historyPromo.controller.js";

export const getPromoByVOC = async (voc, dateNow, user_id) => {
    try {
        const promo = await Promo.findOne({
            where:{
                voucher: voc,
                date_start: {
                    [Op.lte]: dateNow
                },
                date_end: {
                    [Op.gte]: dateNow
                }
            }
        })

        if(!promo) {
            return false
        } else {
            const responseHistory = await getHistoryPromoByUserIDAndPromoID(promo, user_id)
            if (responseHistory == false) 
                return 'used'
            else if (responseHistory == "limit-day") 
                return responseHistory
            else if (responseHistory == "limit-quota") 
                return responseHistory
            else
                return promo
        }
    } catch (error) {
        console.log(error)
    }
}