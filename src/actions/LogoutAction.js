function Logout(navigator) {
    navigator.navigate('Login')
    return {
        type: 'LOGOUT',
    };
};

export default Logout;