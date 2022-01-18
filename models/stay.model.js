import { DataTypes } from "sequelize"
import database from "../config/database.js"
import Reservation from "./reservation.model.js";
import Room from "./room.model.js";

const Stay = database.define('stay', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    reservation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter reservation_id'
            }
        }
    },
    guest_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter guest_name'
            }
        }
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter room_id'
            }
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
})

Stay.belongsTo(Reservation, {
    foreignKey: 'reservation_id',
    constraints: false
});

Stay.belongsTo(Room, {
    foreignKey: 'room_id',
    constraints: false
});

export default Stay