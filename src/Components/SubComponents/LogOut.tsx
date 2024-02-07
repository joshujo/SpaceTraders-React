function LogOut() {
    function logOut() {
        sessionStorage.clear();
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
            <button onClick={logOut}
            style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
            }}
            >Log Out</button>
        </div>
    );
}

export default LogOut;