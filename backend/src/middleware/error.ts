export function errorHandler(err,req,res,next) {
    res.status(err.statusCode || 500).send(err.message);
}
