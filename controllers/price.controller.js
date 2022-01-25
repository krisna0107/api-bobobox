import Price from "../models/price.model.js"

export const totalPrice = async (room_type, checkin_date, checkout_date, count) => {
    try {
        const price = await Price.findOne({
            where: {
                date: checkin_date,
                room_type_id: room_type
            }
        })
        const diffDays = Math.ceil(Math.abs(new Date(checkin_date) - new Date(checkout_date)) / (1000 * 60 * 60 * 24));
        const total = BigInt(price.price) * count * diffDays
        return total
    } catch (error) {
        console.log(error)
    }

}