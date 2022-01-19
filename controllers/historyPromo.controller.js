import HistoryPromo from "../models/historyPromo.model.js"

export const limitDayPromo = async (promo) => {
    try {
        const historyPromo = await HistoryPromo.count({
            where: {
                promo_id: promo.id,
                date: new Date()
            }
        })
        return historyPromo
    } catch (error) {
        console.log(error)
    }
}

export const limitQuotaPromo = async (promo) => {
    try {
        const historyPromo = await HistoryPromo.count({
            where: {
                promo_id: promo.id
            }
        })
        return historyPromo
    } catch (error) {
        console.log(error)
    }
}

export const getHistoryPromoByUserIDAndPromoID = async (promo, user_id) => {
    try {
        const historyPromo = await HistoryPromo.findOne({
            where: {
                promo_id: promo.id,
                user_id: user_id
            }
        })
        if (!historyPromo) {
            const limitDay = await limitDayPromo(promo)
            const limitQuota = await limitQuotaPromo(promo)
            if (limitDay >= promo.limit_day) {
                return "limit-day"
            } else if (limitQuota >= promo.quota) {
                return "limit-quota"
            } else {
                return true
            }
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
}

export const createHistoryPromo = async (data) => {
    try {
        const historyPromo = await HistoryPromo.create(data)
        return historyPromo
    } catch (error) {
        console.log(error)
    }
}