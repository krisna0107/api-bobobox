import { DataTypes } from "sequelize"
import database from "../config/database.js"
import Room from "./room.model.js";
import Stay from "./stay.model.js";

const StayRoom = database.define('stay_room', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    stay_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter stay_id'
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
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter date'
            }
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
})

StayRoom.belongsTo(Stay, {
    foreignKey: 'stay_id',
    constraints: false
});

StayRoom.belongsTo(Room, {
    foreignKey: 'room_id',
    constraints: false
});

export default StayRoom