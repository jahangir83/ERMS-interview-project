
const authRouter = require('./authorRouter')



const route = [
    {
        path: '/auth',
        hendler: authRouter
    },
    // {
    //     path: '/deshbord',
    //     hendler:deshbordRoute
    // },
    // {
    //     path: '/playground',
    //     hendler: play
    // },
    // {
    //     path: "/upload",
    // hendler: uploadRoute
    // },
    // {
    //     path: '/posts',
    //     hendler: PostRoute
    // },
    // {
    //     path: '/explorer',
    //     hendler:exploerRoute
    // },
    // {
    //     path: '/search',
    //     hendler: searchRouter
    // },
    // {
    //     path: '/authore',
    //     hendler: authoreRouter
    // },
    // {
    //     path: '/api',
    //     hendler: apiRoute
    // },
    {
    path: '/',
        hendler:  (req, res) => {
            console.log(req.session)
            res.render('index')
    }
    },
    
    
]

module.exports = app => {
    route.forEach(r => {
        if (r.path == '/') {
            app.get(r.path, r.hendler)
        } else {
            app.use(r.path, r.hendler)
        }
    })
}
