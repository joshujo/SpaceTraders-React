type LogOutProps = {
    onLogout: () => void;
};

function LogOut({ onLogout }: LogOutProps) {
    function logOut() {
        localStorage.removeItem('token');
        sessionStorage.clear();
        onLogout(); // Call the callback function to notify the parent component
    }

    return (
        <div>
            <button
                onClick={logOut}
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '100px',
                    width: '125px',
                }}
            >
                Switch User
            </button>
        </div>
    );
}

export default LogOut;