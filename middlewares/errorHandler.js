const errorHandler=(error,req,res,next)=>{
    res.status(error.status || 500 ).json({
        succes:false,
        status:error.status,
        message:error.message
    })
    
    }
    
    export default errorHandler;