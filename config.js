//request library mysql
const mysql = require('mysql')

//variabel koneksi untuk database
const db = mysql.createConnection ({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6695650',
    password: 'Iezu1TfTIg',
    database: 'sql6695650'
})

//kirimkan variabel keluar untuk digunakan diluar file
module.exports = db