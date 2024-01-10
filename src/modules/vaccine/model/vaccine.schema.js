const { Schema , model} = require('mongoose')
const StatusEnum = require("../../../common/status.enum")

const VaccineSchema = new Schema({
    name: {
        type : String,
        required : true // บังคับใส่
    },
    quantity:{
        type: Number,
        default: 0
    },
    quanlity:{
        type: Number,
        default: 0
    },
    status:{
        type: String,
        default:StatusEnum.ACTIVE
    }
},{ timestamps:true, strict: true }) //statics ไม่รับ

// ( ชื่อ Databest , Schema )
const VaccineModel = model("vaccines",VaccineSchema)
module.exports = VaccineModel