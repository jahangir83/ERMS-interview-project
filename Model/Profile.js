

module.exports = (sequelize, DataTypes) => {

    const Profile = sequelize.define("profile", {
        fullname:{
            type: DataTypes.STRING,
            allowNull:false,
        
        },
        fathername:{
            type : DataTypes.STRING,
            allowNull: false
        },
        email: {
            type    : DataTypes.STRING,
            isUnique :true,
            allowNull:false,
            validate:{
                isEmail : true
            }
        },
        Address:{
            type: DataTypes.TEXT
        },
        dateOfBrit:{
            type: DataTypes.STRING
        },
        gender:{
            type: DataTypes.STRING
        },
        age:{
            type: DataTypes.INTEGER
        },
        phone:{
            type: DataTypes.INTEGER

        }, 
        language:{
            type: DataTypes.STRING 
        },
        profilePic:{
            type :DataTypes.STRING,
            
        }

    })

    return Profile;
}