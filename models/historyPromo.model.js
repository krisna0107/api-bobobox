import { DataTypes } from "sequelize"
import database from "../config/database.js"


const HistoryPromo = database.define('history_promo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    promo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter promo_id'
            }
        }
    },
    user_id: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter user_id'
            }
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default HistoryPromo