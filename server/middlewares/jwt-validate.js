const { response } = require("express");
const jwt = require('jsonwebtoken');


const JWTvalidate = (req, res = response, next) => {

    const token = req.header('x-token');

    if( !token ){
        return res.status(401).json({
            ok: false,
            msg: 'There are not token',
        });
    }

    try{
        const {aid, name} = jwt.verify(
            token,
            process.env.SECRETE_JWT_SEED
        );

        req.aid = aid;
        req.name = name;

        next();

    }catch(error){
        return res.status(401).json({
            msg: 'Token invalid',
        });
    }
}

module.exports = { JWTvalidate };