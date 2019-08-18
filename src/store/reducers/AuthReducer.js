const initState ={
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
                console.log('login error');
            return {
                ...state, 
            authError: 'login failed'
        }

        case 'LOGIN_SUCCESS':
        console.log('login success');
        return {
            ...state,
            authError: null
        }

        case 'SIGNEDOUT_SUCCESS' :
            console.log('signedout success');
            return state;
        default:
            return state;

        case 'SIGNUP_SUCCESS' :
            console.log('success');
            return{
                ...state,
                authError: null
            }

            case 'SIGNUP_ERROR':
                console.log('signup error');
                return {
                    ...state,
                    authError: action.err.message
                }

            }            
        }

export default authReducer;