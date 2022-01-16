import { DataTypes } from "sequelize"
import database from "../config/database.js"

const Hotel = database.define('hotel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    hotel_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter hotel_name'
            }
        }
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter address'
            }
        }
    }
}, {
    freezeTableName: true
})

export default Hotel