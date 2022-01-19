import Room from '../models/room.model.js'
import RoomType from '../models/roomType.model.js';
import Price from '../models/price.model.js';
import { roomCollection } from '../transformers/roomCollection.transformers.js'
import { Op } from 'sequelize';

export const getRoomAvailability = async (req, res, next) => {
    if (req.query.room_qty == null || req.query.room_type_id == null || req.query.checkin_date == null || req.query.checkout_date == null)
        return res.status(400).jsonp({ "error": 400, message: "Bad Request" })
    try {
        const diffDays = Math.ceil(Math.abs(new Date(req.query.checkin_date) - new Date(req.query.checkout_date)) / (1000 * 60 * 60 * 24));
        const price = await Price.findOne({
            where: {
                room_type_id: req.query.room_type_id,
                date: req.query.checkin_date
            }
        })

        const room = await Room.findAll({
            include: [
                {
                    model: RoomType,
                    required: true,
                    include: [{
                        model: Price,
                        as: 'price',
                        attributes: ["date", "price"],
                        required: true,
                        where: {
                            date: {
                                [Op.between]: [req.query.checkin_date, req.query.checkout_date]
                            }
                        }
                    }]
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
            total_price: price.price * req.query.room_qty * diffDays,
            available_room: roomCollection(room),
        })
    } catch (error) {
        console.log(error)
    }
}