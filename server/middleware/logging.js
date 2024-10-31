const logging=(req, res, next)=>{
    res.setHeader("Content-Type", "Application/Json");
    next();
}

module.exports= logging;