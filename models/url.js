const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://sumedhnavuda:%408217nvda@cluster0.evh93.mongodb.net/URLproject")
mongoose.set("strictQuery",true)
const urlSchema=new mongoose.Schema({
    shortUrl:{
        type:String,
        required:true,
        unique:true,
    },
    shortUrlQR:{
        type:String,
        required:true,
        unique:true,
    },
    OrginalUrl:{
        type:String,
        required:true,
    },
    visithistory:[{timestamp:{type:Number}}],
},
{timestamps:true}
)

const URL=mongoose.model("URL",urlSchema)
module.exports=URL;