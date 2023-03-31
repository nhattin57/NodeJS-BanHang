import  jwt  from "jsonwebtoken"

export default function checkToken(req, res, next) {
    //bypass login, register
    //debugger
    
    if(req.url.toLowerCase().trim() == '/member/login'.toLowerCase().trim() 
        || req.url.toLowerCase().trim() == '/member/register'.toLowerCase().trim()
        ) {
            next()
        return
    }
     // other request
     //get annd validate token
     const token = req.headers?.authorization?.split(" ")[1]
     //veriry
     try {
        const jwtObject = jwt.verify(token, process.env.JWT_SECRET)
        const isExpired = Date.now() >= jwtObject.exp * 1000 //ktra xem token con hieu luc ko
        if(isExpired) {
            res.status(400).json({
                message: 'Token is expired'
            })
            res.end()
        } else {
            next()
            return
        }

     } catch (exception) {
        res.status(400).json({
            message: exception.toString()
        })
     }
     

}