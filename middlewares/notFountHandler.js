import createError from 'http-errors'
const notFoundError=(req, res, next)=>{
next(createError(404,"La ruta no existe"))
}

export default notFoundError;