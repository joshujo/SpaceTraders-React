import { useEffect, useState } from 'react';
import infopanel from '../ApiCalls/infopanel';
import '../CSS_Modules/module.infoPanel.css';

    function InfoPanel() {
    const token = sessionStorage.getItem('token') as string;

    const [dataProcessed, setDataProcessed] = useState<any>(null);
    const [updateText, setUpdateText] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            const result = await infopanel(token);
            const { data } = await result;
            const { accountId, symbol, headquarters, credits, startingFaction, shipCount } = await data;
            setDataProcessed({ accountId, symbol, credits, headquarters, startingFaction, shipCount });
            setUpdateText("Last updated at: " + new Date().toLocaleTimeString());
        };

        fetchData(); // Run immediately

        const interval = setInterval(fetchData, 15000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function copyToken() {
        navigator.clipboard.writeText(token);
    }

    return (
        <div className='infoPanel'>
            <h1>User Information</h1>
            <p>Account ID: <strong>{dataProcessed?.accountId}</strong></p> 
            <p>Symbol: <strong>{dataProcessed?.symbol}</strong></p>
            <p>Credits: <strong>{dataProcessed?.credits}</strong></p>
            <p>Headquaters: <strong>{dataProcessed?.headquarters}</strong></p>
            <p>Starting Faction: <strong>{dataProcessed?.startingFaction}</strong></p>
            <p>Ship Count: <strong>{dataProcessed?.shipCount}</strong></p> 
            <button onClick={copyToken}
            style={{
                height: '30px',
                width: '120px',
                fontSize: '0.8em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}
            >Copy Token</button>
            <p
            style={{
                fontSize: '0.6em',
                position: 'relative',
                bottom: '1px',
                left: '0',
                margin: '2px',
                color: 'grey',
            }}
            >{updateText}</p>
        </div>
    )
}

export default InfoPanel;