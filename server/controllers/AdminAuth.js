const {response} = require('express');
const adminAuth = require('../models/adminAuth');
const bcrypt = require('bcryptjs');
const { JWTgenerate } = require('../middlewares/jwt');

const createAdmin = async(req, res = response) => {

    const { email, password } = req.body;

    try{

        let admin = await adminAuth.findOne({email});

        if( admin ){
            return res.status(400).json({
                ok: false,
                msg: 'The email already exist',
            });
        }

        admin = new adminAuth(req.body);
        const salt = bcrypt.genSaltSync(10);
        admin.password = bcrypt.hashSync( password, salt )
        await admin.save();

        const token = await JWTgenerate(admin.id, admin.name);

        return res.status(201).json({
            ok: true,
            aid: admin.id,
            name: admin.name,
            token
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Ups anything was wrong',
        });
    }

}

const loginAdmin = async(req, res = response) => {

    const { email, password } = req.body;

    try{

        let admin = await adminAuth.findOne({email});
        
        if( !admin ){
            return res.status(404).json({
                ok: false,
                msg: 'The email do not exist',
            });
        }

        const passwordValidate = bcrypt.compareSync(password , admin.password);
        if( !passwordValidate ){
            return res.status(400).json({
                ok: false,
                msg: 'Password wrong',
            });
        }

        const token = await JWTgenerate(admin.id, admin.name);

        return res.status(200).json({
            ok: true,
            aid: admin.id,
            name: admin.name,
            token,
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Ups anything was wrong',
        });
    }
}

const TokenValidate = async(req, res = response) => {

    const { aid, name } = req;

    const token = await JWTgenerate(aid, name);

    return res.status(200).json({
        ok: true,
        token,
        aid: aid,
        name: name,
    });
}

module.exports = { 
    createAdmin, 
    loginAdmin, 
    TokenValidate 
};