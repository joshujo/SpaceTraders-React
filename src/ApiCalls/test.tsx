async function test(token: string) {
    const options = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
      };

    await fetch('https://api.spacetraders.io/v2/my/agent', options)
      try {
        const response = await fetch('https://api.spacetraders.io/v2/my/agent', options);
        const data = await response.json();
        
        if (data.hasOwnProperty('data')) {
          return true;
        } else {
          return false;
        }

      } catch (error) {
        return false;
      }
}

export default test;