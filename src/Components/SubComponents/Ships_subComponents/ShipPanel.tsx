import styles from '../../../CSS_Modules/shipPanel.module.css'


function ShipPanel(props: any) {

    const orbitChange = (event: any) => {
        if (!event.target.checked) {
            props.dockChange(props.symbol)
          
            props.change()
        } else {
            props.orbitChange(props.symbol)
            
            props.change()
        }
    }

  return (
    <div 
    key={props.i}
    className={styles.shipPanelContainer}
    >
    <p>Ship Symbol: {props.symbol}</p>
    <p>Frame type: {props.frameName}</p>
    {
        props.FuelPercentage !== null ?
        <p>Fuel: <progress id={props.symbol} value={props.FuelPercentage} max="100"></progress> {props.FuelPercentage}%</p> 
        : <p></p>
    }
    <p>Status: {props.status}</p>
    <p>Flight Mode: {props.flightMode}</p>
    <p>Location: {props.location}</p>

    {
    props.cargoCapacity === 0 ? null :
    <p>Cargo Capacity: <progress id={"cargo_"+props.symbol} value={(props.cargoCurrent/props.cargoCapacity)}></progress> {props.cargoCurrent}/{props.cargoCapacity}</p>
    }

<p>Dock   <label className={styles.switch}>
  {
    props.status === "DOCKED" ? <input type="checkbox" checked={false} onChange={orbitChange}></input> : <input type="checkbox" onChange={orbitChange} checked={true} ></input>
  }
  <span className={`${styles.slider} ${styles.round}`}></span>
</label>   Orbit</p>
    </div>
  );
}

export default ShipPanel;