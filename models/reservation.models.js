import { DataTypes } from "sequelize"
import database from "../config/database.js"

const Reservation = database.define('reservation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    customer_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter costumer_name'
            }
        }
    },
    booked_room_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter booked_room_count'
            }
        }
    },
    checkin_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter checkin_date'
            }
        }
    },
    checkout_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter checkout_date'
            }
        }
    },
    hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter hotel_id'
            }
        }
    }
}, {
    freezeTableName: true
})

export default Reservation