'use strict';

const { DataTypes, Model, Op, Sequelize } = require('sequelize');
const sequelize = require('../services/sequelize.js');

class Gym extends Model {

    static getCount(guildId, userId) {
        return Gym.count({
            where: {
                guildId: guildId,
                userId: userId,
            }
        });
    }

    static getAll(guildId, userId) {
        return Gym.findAll({
            where: {
                guildId: guildId,
                userId: userId,
            }
        });
    }

    static getByName(guildId, userId, name) {
        return Gym.findOne({
            where: {
                guild_id: guildId,
                user_id: userId,
                name: name,
            }
        });
    }
    
    static getById(id) {
        return Gym.findByPk(id);
    }

    static delete(guildId, userId, name) {
        return Gym.destroy({
            where: {
                guildId: guildId,
                userId: userId,
                name: name,
            }
        });
    }

    static deleteById(id) {
        return Gym.destroy({
            where: {
                id: id,
            }
        });
    }

    static deleteAll(guildId, userId) {
        return Gym.destroy({
            where: {
                guildId: guildId,
                userId: userId,
            }
        });
    }
}

Gym.init({
    id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    subscriptionId: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: 0,
    },
    guildId: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
    },
    userId: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
    },
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    indexes: [
        {
            name: 'FK_gym_subscriptions_subscription_id',
            fields: ['subscription_id'],
        },
    ],
    tableName: 'gyms',
});

module.exports = Gym;
