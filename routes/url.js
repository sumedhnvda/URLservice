const express=require("express")
const {UrlGen}=require("../controllers/url")
const {analytics}=require("../controllers/url")
const router =express.Router()
router.post("/",UrlGen)
router.get("/analytics/:shortID",analytics)
module.exports=router