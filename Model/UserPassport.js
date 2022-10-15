


module.exports = (sequelize, DataTypes) => {
    const passport = sequelize.define("passport", {
        passportNumbre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        passportImg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passportEpireDate:{
            type: DataTypes.STRING,
            allowNull: false

        },
        passportIssu:{
            type: DataTypes.STRING,
            allowNull: false

        },

    })
    return passport
}