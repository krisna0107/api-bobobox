import { DataTypes } from "sequelize"
import database from "../config/database.js"
import Hotel from "./hotel.model.js";
import RoomType from "./roomType.model.js";

const Room = database.define('room', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
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
    room_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter room_type_id'
            }
        }
    },
    room_number: {
        type: DataTypes.STRING(3),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter room_number'
            }
        }
    },
    room_status: {
        type: DataTypes.ENUM('available', 'out of service'),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter room_status'
            }
        }
    },
}, {
    freezeTableName: true,
    timestamps: false
})

Room.belongsTo(Hotel, {
    foreignKey: 'hotel_id',
    constraints: false
});

Room.belongsTo(RoomType, {
    foreignKey: 'room_type_id',
    constraints: false
});

export default Room