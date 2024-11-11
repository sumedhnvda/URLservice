const express=require("express")
const URLroute=require("./routes/url")
const URL=require("./models/url")
const app=express()
const port=8000
app.use(express.json())
app.use("/url",URLroute)
app.use("/:shortID",async (req,res)=>{
    const shortID=req.params.shortID
   const redirecturl= await URL.findOneAndUpdate({
        shortID,
    },
{$push:{ visithistory:{
    timestamp:Date.now()
}
}})
res.redirect(redirecturl.OrginalUrl)
})
app.listen(port,()=>console.log(`Running at ${port}`))