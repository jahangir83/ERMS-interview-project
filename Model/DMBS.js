
const dbConfig = require('../Configaration/DBconfiguration')

const {Sequelize, DataTypes


} = require('sequelize');


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
        {
            host : dbConfig.HOST,
            dialect: dbConfig.dialect,
            operatorsAliases: false,

            poot:{
                max: dbConfig.pool.max,
                min: dbConfig.pool.min,
                acquire: dbConfig.pool.acquire,
                idle: dbConfig.pool.idle
            }
        }

)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require("./UserModel.js")(sequelize, DataTypes)
db.profile = require("./Profile.js")(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
    // console.log(db);
}) 
.catch((err) => {
    console.log(err);
} )



//one to many relationship 

db.users.hasMany(db.profile)

db.profile.belongsTo(db.users)

module.exports = db