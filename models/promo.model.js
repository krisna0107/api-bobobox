import { DataTypes } from "sequelize";
import database from "../config/database.js";

const Promo = database.define('promo', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter title'
            }
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter description'
            }
        }
    },
    voucher: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter voucher'
            }
        }
    },
    date_start: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter date_start'
            }
        }
    },
    date_end: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter date_end'
            }
        }
    },
    limit_day: {
        type: DataTypes.INTEGER,
    },
    quota: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter quota'
            }
        }
    },
    room_type_id: {
        type: DataTypes.INTEGER,
    },
    type: {
        type: DataTypes.ENUM('percentage', 'currency'),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter type'
            }
        }
    },
    reward: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter reward'
            }
        }
    },
    minimum_room: {
        type: DataTypes.INTEGER,
    },
    minimum_night: {
        type: DataTypes.INTEGER,
    },
},{
    freezeTableName: true,
    timestamps: false
})

export default Promo