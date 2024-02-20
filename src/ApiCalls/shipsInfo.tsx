async function shipsInfo() {

    const token = sessionStorage.getItem('token');

    const url = 'https://api.spacetraders.io/v2/my/ships';
        const options = {
            method: 'GET',
            headers: {Accept: 'application/json', Authorization: 'Bearer ' + token}
        };
    
    try {
        const data = await fetch(url, options);
        const response = await data.json();
        return response;
    } catch (error) {
        null;
    }


}

export default shipsInfo;