import { useEffect, useState } from "react";
import '../CSS_Modules/module.register.css';

const Register = () => { 
    const [symbol, setSymbol] = useState('');

    const handleChange = (event: any) => {
        event.preventDefault();
        setSymbol(event.target.value);
    }

    const factions = ["COSMIC", "VOID", "GALACTIC", "QUANTUM", "DOMINION", "ASTRO", "CORSAIRS", "OBSIDIAN", "AEGIS", "UNITED", "SOLITARY", "COBALT", "OMEGA", "ECHO", "LORDS", "CULT", "ANCIENTS", "SHADOW", "ETHEREAL"]

    const [faction, setFaction] = useState(factions[0]);
    
    const factionChange = async ( event: any) => {
        event.preventDefault();
        setFaction(event.target.value);
    }

    useEffect(() => {
        console.log(faction);
    }, [faction]);


    return (
        <div className='registrationPanel'>
            <h1>SpaceTraders</h1>
            <form>
                <label htmlFor="symbol">Symbol: </label>
                <input type="text" 
                id="symbol" 
                name="symbol" 
                value={symbol}
                onChange={handleChange}></input>
                <br />
                <label htmlFor="faction">Faction: </label>
                <select id="faction" name="faction" onChange={factionChange} value={faction}>
                    {factions.map((factions) => {
                        return <option value={factions} key={"faction_" + factions} >{factions}</option>
                    })}
                </select>
                <br />
                <label htmlFor="RememberMe">Remember me? </label>
                <input type="checkbox" id="RememberMe" name="RememberMe"></input>
            </form>
        </div>
    )



}

export default Register;