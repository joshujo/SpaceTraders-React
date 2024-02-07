import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import LogOut from './SubComponents/LogOut';
import InfoPanel from './InfoPanel';

function Main({token} : {token: any}) {
    
    return (
        <>
            <h1>SpaceTraders</h1>
            <LogOut />
            <InfoPanel />
        </>
    )
}
export default Main;