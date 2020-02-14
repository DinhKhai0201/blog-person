
const Token_remote_Key = 'auth';

export const GetToken = () => {
    if (localStorage && localStorage.getItem(Token_remote_Key)) {
        return JSON.parse(localStorage.getItem(Token_remote_Key));
    } else {
        return false;
    }
    
};

export const SetToken = (token) => {
    localStorage.setItem(Token_remote_Key, JSON.stringify({
        accesstoken: token,
        isAuthenticated: true
    }))
}

export const RemoveToken = () => {
    localStorage.removeItem(Token_remote_Key)
}

