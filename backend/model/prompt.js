const mongoose=require('mongoose')


const Schema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        }
        ,
       title:{
        type:String,
        required:true
       }
       ,
       prompt:{
        type:String,
        required:true
       },
       rating:{
  type:Number
       }
       ,
       additionalUrl:{
        type:String
       }
    }
)

module.exports=mongoose.model('promptDB',Schema)
