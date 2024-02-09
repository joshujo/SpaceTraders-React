async function register(symbol: string, faction: string) {
    try {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              symbol: symbol,
              faction: faction,
            }),
          };

        const response = await fetch('https://api.spacetraders.io/v2/register', options);
        const data = await (response).json();

        if (data.hasOwnProperty('data')) {
            sessionStorage.setItem('token', data.data.token);
            const rememberMeCheckbox = document?.getElementById('RememberMe') as HTMLInputElement;
            if (rememberMeCheckbox?.checked === true) {
                localStorage.setItem('token', data.data.token);
          
                const obj = {
                  symbol: symbol,
                  token: data.data.token,
                }
          
                const existingUsers = localStorage.getItem('users');
                const users = existingUsers ? JSON.parse(existingUsers) : [];
                users.push(obj);
                localStorage.setItem('users', JSON.stringify(users));

            }
            return true;
        } else {
            return false;
        }
    } catch (error) {

    }
}

export default register;