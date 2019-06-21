const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login fail');
            return {
                ...state,
                authError: 'Login failed'
            };

        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null,
            };

        case 'SIGNOUT_ERROR':
            console.log('signout error');
            return state;

        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('signUP success');
            return {
                ...state,
                authError: null
            };

        case 'SIGNUP_ERROR':
            console.log('signUP error');
            return {
                ...state,
                authError: action.err.message
            };

        default:
            return state;
    }
};

export default authReducer;