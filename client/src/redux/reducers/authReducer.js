import {types} from '../types/types';

const initialState = {
    checking: true,
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.authStartLogin:
            
            break;
        case types.authCheckingFinish:
            
            break;
        case types.authLogout:
            
            break;
    
        default:
            return state
    }
}