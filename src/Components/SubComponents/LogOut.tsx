type LogOutProps = {
    onLogout: () => void;
};

function LogOut({ onLogout }: LogOutProps) {
    function logOut() {
        sessionStorage.clear();
        localStorage.clear();
        onLogout(); // Call the callback function to notify the parent component
    }

    return (
        <div>
            <button
                onClick={logOut}
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                }}
            >
                Log Out
            </button>
        </div>
    );
}

export default LogOut;