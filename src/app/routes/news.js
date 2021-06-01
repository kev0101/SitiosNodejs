const bodyParser = require('body-parser');
const dbConnection = require('../../config/dbConnection');
var nodemailer = require('nodemailer');

module.exports = app => {
    const connection = dbConnection();

    app.get('/', (req, res) => {
        connection.query('SELECT nombre, apellidos, direccion, telefono, edad, altura FROM agenda', (err, result) => {
            res.render('news/news', {  //Ruta de envio de valores
                news: result,
                correoPre: "kevorozc1021@gmail.com"
            });
        });
    });

}
