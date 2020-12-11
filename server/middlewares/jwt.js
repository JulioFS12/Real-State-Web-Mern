const jwt = require('jsonwebtoken');

const JWTgenerate = ( aid, name ) => {

    return new Promise( (resolve, reject) => {

        const payload = { aid, name };

        jwt.sign( payload, process.env.SECRETE_JWT_SEED, {
            expiresIn: '24h',
        }, (err, token) => {

            if(err){
                console.log(err);
                reject('There are token problems');
            }else{
                resolve(token);
            }
        });
    });
}

module.exports = { JWTgenerate };