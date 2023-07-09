const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Post extends Model { }

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false 
    }
},
{
    sequelize,
    timestamps: false,
    modelName: 'post'
})

module.exports = Post 