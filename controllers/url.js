const shortid = require("shortid");
const URL = require("../models/url");

async function UrlGen(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ err: "Bad request" });

    const shortID = shortid.generate(); // Use generate() to create the ID

    await URL.create({
        shortUrl: shortID,
        shortUrlQR: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${body.url}`,
        OrginalUrl: body.url,
        visithistory: [],
    });

    return res.json({
        id: shortID,
    });
}

async function analytics(req,res) {
    const shortID=req.params.shortID
    const result=await URL.findOne({shortID})
    return res.json({
        totalclicks:result.visithistory.length,
        analytics:result.visithistory,
    })
    
}

module.exports = {
    UrlGen,
    analytics
}