import styles from '../../CSS_Modules/ships.module.css';
import ShipPanel from './Ships_subComponents/ShipPanel';
import shipsInfo from '../../ApiCalls/shipsInfo';
import { useEffect, useState } from 'react';
import orbit from '../../ApiCalls/orbit';
import dock from '../../ApiCalls/dock';

function Ships() {

    const [dataProcessed, setDataProcessed] = useState<any>(null);
    const [change, setChange] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await shipsInfo();
            const { data } = await result;
            setDataProcessed(data);
        };

        const interval = setInterval(fetchData, 25000);

        fetchData();
        
        return () => {
            clearInterval(interval);
        };
    }, [change]);

    function orbitChange(ship: string) {
        orbit(ship)
        
    }

    function dockChange(ship: string) {
        dock(ship)
        
    }

    function refresh() {
        setChange(!change);
        setTimeout(() => { setChange(prevChange => !prevChange); }, 1000);
        setTimeout(() => { setChange(prevChange => !prevChange); }, 1500);
    }

    return (
                <div 
                className={styles.main_container}
                >
                <h1
                className={styles.title}
                >Ships</h1>
            {
                dataProcessed?.map((ship: any, i: number ) => (


                    <div key={"ship_"+i}>
                    <ShipPanel
                    key={"ship_"+i}
                    symbol={ship.symbol}
                    FuelPercentage={
                        ship.fuel.capacity === 0 ? null :
                        (ship.fuel.current/ship.fuel.capacity)*100}
                    status={ship.nav.status}
                    flightMode={ship.nav.flightMode}
                    location={ship.nav.waypointSymbol}
                    cargoCapacity={ship.cargo.capacity}
                    cargoCurrent={ship.cargo.units}
                    frameName={ship.frame.name}
                    orbitChange={orbitChange}
                    dockChange={dockChange}
                    change={refresh}
                    />
                    </div>
                ))
            }

                </div>
    );
}

export default Ships;
