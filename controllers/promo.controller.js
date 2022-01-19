import Promo from "../models/promo.model.js"
import { Op } from 'sequelize';
import { getHistoryPromoByUserIDAndPromoID } from "./historyPromo.controller.js";
import { paginationTransform } from "../transformers/paginationCollection.transformers.js";

export const getPromoList = async (req, res) => {
    try {
        const dateNow = new Date()
        const pageAsNumber = Number.parseInt(req.query.page)
        const sizeAsNumber = Number.parseInt(req.query.size)

        let page = 0;
        if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
            page = pageAsNumber;
        }

        let size = 10;
        if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
            size = sizeAsNumber;
        }
        const promo = await Promo.findAndCountAll({
            where: {
                date_start: {
                    [Op.lte]: dateNow
                },
                date_end: {
                    [Op.gte]: dateNow
                }
            },
            limit: size,
            offset: page * size,
        })
        res.status(200).send(paginationTransform(size, promo))
    } catch (error) {
        console.log(error)
    }
}

export const getPromoByVOC = async (voc, dateNow, user_id) => {
    try {
        const promo = await Promo.findOne({
            where: {
                voucher: voc,
                date_start: {
                    [Op.lte]: dateNow
                },
                date_end: {
                    [Op.gte]: dateNow
                }
            }
        })

        if (!promo) {
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