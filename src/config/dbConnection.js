const mysql = require('mysql');

module.exports = () => {

    return mysql.createConnection({
        host: 'bmtbu3ocygx0zx5weksq-mysql.services.clever-cloud.com',
        user: 'utd9bmpua5j5noss',
        password: 'yay9DrCDW0bEluZC5MQn',
        database: 'bmtbu3ocygx0zx5weksq'
    })

}