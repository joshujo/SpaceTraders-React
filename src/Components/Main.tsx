import LogOut from './SubComponents/LogOut';
import InfoPanel from './InfoPanel';
import Content from './Content';


function Main({ handleLogOut }: { handleLogOut: any }) {

    
    return (
        <>
            <h1>SpaceTraders</h1>
            <LogOut 
            onLogout={handleLogOut}
            />
            <InfoPanel />
            <Content />
        </>
    )
}
export default Main;