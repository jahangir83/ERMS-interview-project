

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("users", {
        
        username:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        email: {
            type    : DataTypes.STRING,
            isUnique :true,
            allowNull:false,
            validate:{
                isEmail : true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
        },

    })

    return User; 
}