import Room from '../models/room.model.js'
import RoomType from '../models/roomType.model.js';
import Price from '../models/price.model.js';
import { roomCollection } from '../transformers/roomCollection.transformers.js'

export const getRoomAvailability = async (req, res, next) => {
    if (req.query.room_qty == null || req.query.room_type_id == null || req.query.checkin_date == null || req.query.checkout_date == null)
            return res.status(400).jsonp({ "error": 400, message: "Bad Request" })
    try {
        const room = await Room.findAll({
            include: [
                {
                    model: RoomType,
                    include: {
                        model: Price,
                        as: 'price',
                        attributes: ["date", "price"]
                    }
                }
            ],
            where: {
                room_status: 'available',
                room_type_id: req.query.room_type_id
            },
        })

        res.status(200).jsonp({
            room_qty: req.query.room_qty,
            room_type_id: req.query.room_type_id,
            checkin_date: req.query.checkin_date,
            checkout_date: req.query.checkout_date,
            total_price: 0,
            available_room: roomCollection(room),
        })
    } catch (error) {
        console.log(error)
    }
}