import { DataTypes } from "sequelize"
import database from "../config/database.js"
import Hotel from "./hotel.model.js"
import RoomType from "./roomType.model.js";

const Reservation = database.define('reservation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter order_id'
            }
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter user_id'
            }
        }
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
    },
    promo_id: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.ENUM('pending', 'success'),
    },
    room_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter room_type_id'
            }
        }
    },
    total_price: {
        type: DataTypes.BIGINT,
    },
}, {
    freezeTableName: true,
    timestamps: false
})

Reservation.belongsTo(Hotel, {
    foreignKey: 'hotel_id',
    constraints: false
});

Reservation.belongsTo(RoomType, {
    foreignKey: 'room_type_id',
    constraints: false
});

export default Reservation