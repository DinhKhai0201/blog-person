
const Token_remote_Key = 'auth';

export const GetToken = () => JSON.parse(localStorage.getItem(Token_remote_Key));

export const SetToken = (token) => {
    localStorage.setItem(Token_remote_Key, JSON.stringify({
        accesstoken: token,
        isAuthenticated: true
    }))
}

export const RemoveToken = () => {
    localStorage.removeItem(Token_remote_Key)
}

