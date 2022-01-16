import { DataTypes } from "sequelize"
import database from "../config/database.js"

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
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter date'
            }
        }
    }
}, {
    freezeTableName: true
})

export default StayRoom