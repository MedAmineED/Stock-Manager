const mySql = require('mysql');


const db = mySql.createPool({
    host : "localhost",
    user : "root",
    password : '',
    database : "course",
}); 

db.getConnection((err, connect)=> {
    if(connect){
            console.log("connect to db succusffly")
            }
    else {
        console.log(err)
    }
})

module.exports = db