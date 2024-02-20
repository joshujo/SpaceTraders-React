async function dock(shipSymbol: string) {
    const token = sessionStorage.getItem('token');
    const url = 'https://api.spacetraders.io/v2/my/ships/' + shipSymbol + '/dock';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
        },
        body: undefined
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export default dock;