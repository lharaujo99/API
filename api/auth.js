const { authSecret} = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('Por favor, verifique senão está faltando nada')
        }
            const users = await app.db('users')
            .where({ email: req.body.email})
            .first()

        if (users){
            bcrypt.compare(req.body.password, users.password, (err, isMatch) => {

            
            if (err || !isMatch) {
                return  res,status(401).send()
                
            }
            const payload = {id: users.id}
            res.json({
                name: users.name, 
                email: users.email,
                token: jwt.encode(payload, authSecret), 
            })
        })
    } else {
        res.status(400). send('Email não cadastrado')
    }
}
return {signin}
}