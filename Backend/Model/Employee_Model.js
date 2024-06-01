const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true, 
        unique:true
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    role:{
        type:String,
        required:true
    },
    image:{
        type:String
    }

},{
    timestamps:true
})

const Employee = mongoose.model('Employee',employeeSchema);

module.exports = Employee;