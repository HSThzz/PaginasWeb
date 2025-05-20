exports.MiddlewareGlogal = (req, res, next)=>{
    console.log('passei pelo middleware')
    res.locals.umaVariavelLocal = 'este é o valor da variavel local'
    next()
}

exports.checkCsrfError = (err, req, res, next)=>{
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.render('erro')     
    }
    //next()
}

exports.csrfMiddleware = (req, res, next) => {
    const token = req.csrfToken()
    res.locals.csrfToken = token
    console.log('Token CSRF sendo enviado para o EJS:', token)
    next()
}
