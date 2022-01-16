import { DataTypes } from "sequelize"
import database from "../config/database.js"

const RoomType = database.define('room_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter name'
            }
        }
    }
}, {
    freezeTableName: true
})

export default RoomType