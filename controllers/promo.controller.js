import Promo from "../models/promo.model.js"

export const getPromoByVOC = async (voc) => {
    try {
        const promo = await Promo.findOne({
            where:{
                voucher: voc
            }
        })

        if(!promo) 
            return false
        else 
            return {
                promo_id: promo.id,
                type: promo.type,
                reward: promo.reward
            }
    } catch (error) {
        console.log(error)
    }
}