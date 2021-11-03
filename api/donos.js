const bcrypt = require('bcrypt-nodejs')
const { emit } = require('nodemon')

module.exports = app =>{
    const obterHash = (password, callback) =>{
        bcrypt.genSalt(10, (err, salt) =>{
            bcrypt.hash(password, salt, null, (err,hash) => callback(hash))
        })

    }
    const safe = (req, res) => {
        obterHash(req.body.password, hash =>{
            const password = hash

            app.db('donos')
                    .insert({name: req.body.name, email: req.body.email, password})
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
        }) 
    }
    return{safe}
}