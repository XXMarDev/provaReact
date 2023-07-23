import './Styles/login.css'
function Login() {
    return(
        <div className="container">
        <h1 className="title">Log-In</h1>
        <div className="credenziali">
            <input type="email" placeholder="Enter your E-mail"/> 
            <input type="password" placeholder="Enter your password"/>
            <p>Forgot password</p>
            <br/> <br/> 
            <button>Sign-In</button>
        </div>
        
    </div>

    )

}
export default Login;