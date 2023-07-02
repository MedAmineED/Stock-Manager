const user = require('../models/users')

class usersController {

    static async getAllusers (req, res){
        const results = await  user.getUsers()

        if(results) {
            res.send(results)
        }
    }
}

module.exports = usersController