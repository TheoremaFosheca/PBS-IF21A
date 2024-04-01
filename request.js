// codingan respon data message
const response = (statusCode, data, message, res)=>{
    res.status(statusCode).json({
        Payload : {
            status_Code : statusCode,
            datas : data,
        },
        message:message,
        pagination:{
            prev:'',
            next:'',
            max:''
        }
    })
}

// kirimkan variabel untuk digunakan
module.exports = response