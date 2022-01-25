import { DataTypes } from "sequelize"
import database from "../config/database.js"
import Price from "./price.model.js"

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
    freezeTableName: true,
    timestamps: false
})

RoomType.hasMany(Price, {
    foreignKey: 'room_type_id',
    constraints: false,
    as: 'price'
});

// Price.belongsTo(RoomType, {
//     foreignKey: 'room_type_id',
//     constraints: false
// });

export default RoomType