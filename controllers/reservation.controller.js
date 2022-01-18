import Hotel from "../models/hotel.model.js";
import Reservation from "../models/reservation.model.js";

export const getReservationByID = async (req, res) => {
    try {
        const reservation = await Reservation.findOne({
            include: {
                model: Hotel
            },
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(reservation)
    } catch (error) {
        console.log(error)
    }
}