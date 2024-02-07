function LogOut() {
    function logOut() {
        sessionStorage.clear();
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
            <button onClick={logOut}>Log Out</button>
        </div>
    );
}

export default LogOut;