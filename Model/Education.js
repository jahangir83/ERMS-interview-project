


module.exports = (sequelize, DataTypes) =>{


    const education = sequelize.define('education', {
        college:{
            type: DataTypes.STRING,
            // allowNull: false
        },
        GPA:{
            type: DataTypes.FLOAT,
            // allowNull : false
        },
        department: {
            type: DataTypes.STRING,
            allowNull : false
        },
        university: {
            type: DataTypes.STRING,
            // allowNull : false
        },
        passingYear:{
            type: DataTypes.STRING,
            // allowNull : false
            
        },
        board:{
            type: DataTypes.STRING,
            // allowNull : false
        },
        result:{
            type: DataTypes.STRING,
            // allowNull : false
        },
        userImage:{
            type: DataTypes.STRING,
            allowNull:false
        },


    })

    return education;
}