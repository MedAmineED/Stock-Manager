const db = require("../config/db")

class usersModel {


    static async getUsers() {

        return new Promise (resolve => {
            db.query("select * from users", {}, (error , result)=> {
                if(!error){
                    resolve(result)
                }else {
                    resolve(error)
                }
            })
        })
    }
}

module.exports = usersModel