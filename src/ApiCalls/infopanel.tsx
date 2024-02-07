async function InfoPanel(token : string) {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    };

    try {
        const response = await fetch('https://api.spacetraders.io/v2/my/agent', options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export default InfoPanel;