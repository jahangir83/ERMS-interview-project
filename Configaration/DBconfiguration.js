module.exports = {
    HOST: 'localhost',
    USER: 'jahangir',
    PASSWORD: 'Jahangir6566',
    DB: 'erms',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}