

module.exports = (sequelize, DataTypes) => {

    const Profile = sequelize.define("profile", {
        fullname:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        profilePic:{
            type : DataTypes.STRING
        },
        title:{
            type: DataTypes.STRING,
            allowNull : false
        },
        email: {
            type    : DataTypes.STRING,
            isUnique :true,
            allowNull:false,
            validate:{
                isEmail : true
            }
        },
        discription:{
            type: DataTypes.TEXT
        },
        dateOfBrit:{
            type: DataTypes.TEXT
        },
        gender:{
            type: DataTypes.TEXT
        },
        age:{
            type: DataTypes.INTEGER
        },
        phone:{
            type: DataTypes.INTEGER
        }, 
        qualification:{
            type: DataTypes.STRING
        },
        language:{
            type: DataTypes.STRING 
        },
        // links: [
        //     {website: DataTypes.STRING},
        //    { facebook: DataTypes.STRING},
        //     {twitter: DataTypes.STRING},
        //     {github: DataTypes.STRING}
        // ], 

     

        
    })

    return Profile;
}