const db = require("../Model/DMBS")

const Profiles = db.profile

const addProfile = async(req, res, next) =>{
    
    let info = {
        image: req.files.path,
        userId: req.params.id,
        fullname: req.body.fullname,
        title: req.body.title,
        email: req.body.email,
        discription: req.body.discription
        
    }

    try {
        const profile = await Profiles.create(info)
        res.status(200).json(profile)
        console.log(profile)
    } catch (error) {
        next(error)
    }
    
}

module.exports = {
    addProfile
}