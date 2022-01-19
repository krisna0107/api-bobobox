import Hotel from "../models/hotel.model.js";
import Reservation from "../models/reservation.model.js";
import RoomType from "../models/roomType.model.js";
import { createHistoryPromo } from "./historyPromo.controller.js";
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

export const createReservation = async (req, res) => {
    try {
        req.body.total_price = await totalPrice(req.body.room_type_id, req.body.checkin_date, req.body.checkout_date, req.body.booked_room_count)
        const createReservation = await Reservation.create(req.body)
        res.status(201).jsonp({ message: "Reservation Created", data: createReservation })
    } catch (error) {
        console.log(error)
    }
}

export const addPromoReservation = async (req, res) => {
    try {
        const dateNow = new Date()
        const reservation = await Reservation.findOne({
            where: {
                order_id: req.body.order_id,
                user_id: req.body.user_id
            }
        })
        const syncPromo = await getPromoByVOC(req.body.voucher, dateNow, req.body.user_id)
        if (syncPromo == false) {
            return res.status(404).jsonp({ message: "Promo Not Found / Expired!" })
        }else if(syncPromo == "limit-day"){
            return res.status(404).jsonp({ message: "Promo limit per day!" })
        }else if(syncPromo == "limit-quota"){
            return res.status(404).jsonp({ message: "Promo end!" })
        }else if(syncPromo == "used"){
            return res.status(404).jsonp({ message: "This promo has been claimed!" })
        } else {
            const diffDays = Math.ceil(Math.abs(new Date(reservation.checkin_date) - new Date(reservation.checkout_date)) / (1000 * 60 * 60 * 24));

            if (syncPromo.minimum_room != null && reservation.booked_room_count < syncPromo.minimum_room)
                return res.status(400).jsonp({ message: "Failed!" })

            if (syncPromo.minimum_night != null && diffDays < syncPromo.minimum_night)
                return res.status(400).jsonp({ message: "Failed!" })

            const tp = await totalPrice(reservation.room_type_id, reservation.checkin_date, reservation.checkout_date, reservation.booked_room_count)
            var total = 0
            if (syncPromo.type == 'percentage') {
                const percent = tp * (syncPromo.reward / 100)
                total = tp - percent
            }
            await Reservation.update({
                promo_id: syncPromo.id,
                total_price: total
            }, {
                where: {
                    order_id: req.body.order_id,
                    user_id: req.body.user_id
                }
            })
            await createHistoryPromo({ promo_id: syncPromo.id, user_id: req.body.user_id, date: dateNow })
            res.status(201).jsonp({ message: "Promo Used" })
        }
    } catch (error) {
        console.log(error)
    }
}

export const setStatusReservation = async (req, res) => {
    await Reservation.update({
        status: 'success'
    }, {
        where: {
            order_id: req.body.order_id,
            user_id: req.body.user_id
        }
    })
    res.status(201).jsonp({ message: "Payment Success" })
}