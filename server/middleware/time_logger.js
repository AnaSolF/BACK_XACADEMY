function time_logger(req,resp,next) {
    console.log('Time:', Date.now())
    next()
    }

    
    module.exports = time_logger