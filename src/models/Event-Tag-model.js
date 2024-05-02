const { Model, DataTypes }= require('sequelize');
const sequelize = require('../config/connection');

class EventTag extends Model {}

EventTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tag_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventname: {
            type: DataTypes.STRING,
            references: {
                model: 'event',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event',
    }
);

module.exports = EventTag;