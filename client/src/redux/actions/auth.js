import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../../configs/config"
import { types } from "../types/types";


export const startLogin = ( email, password, history ) => {
    return async( dispatch ) => {

        const resp = await fetchWithoutToken( 'adminauth/login', { email, password }, 'POST' );
        const body = await resp.json();
        
        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( Login({
                uid: body.aid,
                name: body.name
            }) );

            return true;

        } else {
            Swal.fire('Error', body.msg);
            return false;
        }
    } 
}

export const startRegister = ( name, email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchWithoutToken( 'adminauth/new', { name, email, password }, 'POST' );
        const body = await resp.json();

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( Login({ 
                aid: body.aid,
                name: body.name,
             }) );
        } else {
            Swal.fire('Error', body.msg );
        }
    } 
}

export const startChecking = () => {
    return async( dispatch ) => {

        const resp = await fetchWithToken( 'adminauth/renew' );
        const body = await resp.json();
        
        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( Login({
                aid: body.aid,
                name: body.name,
            }));
        } else {
            dispatch( checkingFinish() );
        }
    }
}

const Login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

const checkingFinish = () => ({
    type: types.authCheckingFinish
});


