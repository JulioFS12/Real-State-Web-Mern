import { fetchWithoutToken } from "../../configs/config"


export const startLogin = (email, password) => {
    return async() => {
        const resp = await fetchWithoutToken( 'auth', { email, password }, 'POST' );
        const body = resp.json();

        
    }
}