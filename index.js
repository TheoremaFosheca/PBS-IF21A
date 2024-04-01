//pemanggilan port NPM
const express = require('express')
const app = express()
const port = 3002

// pemanggilan request body parse
const bodyparser = require('body-parser')

// pemanggilan file config.js di indexs.js
const db = require('./config.js')
const response = require('./request.js')
const { error } = require('console')

// penggunaan body parse
app.use(bodyparser.json())

// tambahkan route get kampus
app.get('/mahasiswa', (req,res)=>{
    const sql = 'SELECT * FROM tb_mahasiswa'
    db.query(sql,(error, result)=>{
        response(200,result,'data mahasiswa',res)
    })
})

// route get data dari mahasiswa dan npm
app.get('/mahasiswa/:npm', (req,res)=>{
    const npm = req.params.npm
    const sql = `SELECT * FROM tb_mahasiswa where npm ='${npm}'`
    db.query(sql, (err, result)=>{
        if(err) throw err
        response(200,result,"get detail mahasiswa",res)
    })
})

// route post mahasiswa
app.post('/mahasiswa', (req, res)=>{
    const {nama, npm, alamat}=req.body
    const sql = `INSERT INTO tb_mahasiswa (nama, npm, alamat) values ('${nama}','${npm}','${alamat}');`

    db.query(sql,(error, fields)=>{
        if(error) response(500, 'invalid', `${nama} dengan npm ${npm} sudah ditambahkan`, res)
        if(fields?.affectedRows){
            const data ={
                isSucces: fields.affectedRows,
                id:fields.insertId,
            }
            response(200,data,"Data berhasil di simpan",res)
        }
    })
})

// log running port 
app.listen(port, () => {
    console.log(`Runing in port ${port}`)
})