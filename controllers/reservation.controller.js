import Hotel from "../models/hotel.model.js";
import Reservation from "../models/reservation.model.js";
import RoomType from "../models/roomType.model.js";
import { totalPrice } from "./price.controller.js";
import { getPromoByVOC } from "./promo.controller.js";

export const getReservationByID = async (req, res) => {
    try {
        const reservation = await Reservation.findOne({
            include: [
                {
                    model: Hotel
                },
                {
                    model: RoomType,
                }
            ],
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(reservation)
    } catch (error) {
        console.log(error)
    }
}

export const addReservation = async (req, res) => {
    try {
        req.body.total_price = await totalPrice(req.body.room_type_id, req.body.checkin_date, req.body.checkout_date, req.body.booked_room_count)
        console.log(req.body)
        await Reservation.create(req.body)
        res.status(201).jsonp({ message: "Reservation Created" })
    } catch (error) {
        console.log(error)
    }
}

export const addPromoReservation = async (req, res) => {
    try {
        const syncPromo = await getPromoByVOC(req.body.voucher)
        if (syncPromo == false) {
            res.status(404).jsonp({ message: "Promo Not Found" })
        } else {
            const reservation = await Reservation.findOne({
                where: {
                    order_id: req.body.order_id,
                    user_id: req.body.user_id
                }
            })
            const tp = await totalPrice(reservation.room_type_id, reservation.checkin_date, reservation.checkout_date, reservation.booked_room_count)
            var total = 0
            if (syncPromo.type == 'percentage') {
                const percent = tp * (syncPromo.reward/100)
                console.log(tp)
                console.log((syncPromo.reward/100))
                console.log(percent)
                total = tp - percent
                console.log(total)
            }
            await Reservation.update({
                promo_id: syncPromo.promo_id,
                total_price: total
            }, {
                where: {
                    order_id: req.body.order_id,
                    user_id: req.body.user_id
                }
            })
            res.status(201).jsonp({ message: "Promo Used" })
        }
    } catch (error) {
        console.log(error)
    }
}

export const setStatusPromo = async (req, res) => {
    await Reservation.update({
        status: 'success'
    }, {
        where: {
            order_id: req.body.order_id,
            user_id: req.body.user_id
        }
    })
    res.status(201).jsonp({ message: "Promo Used" })
}