import { DataTypes } from "sequelize"
import database from "../config/database.js"

const Price = database.define('price', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter date'
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
    price: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter price'
            }
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Price