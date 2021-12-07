const AuthLayout = ({children}) => {
    return (
        <>
        {/* CSS */}
        <link rel="stylesheet" href="assets/css/app.css" />
        <div className="bg-info">
            <div className="d-flex align-items-center justify-content-center vh-100">
                {children}
            </div>
        </div>
        <script src="assets/js/app.js"></script>
        {/* JS */}
        </>
    )
}

export default AuthLayout
