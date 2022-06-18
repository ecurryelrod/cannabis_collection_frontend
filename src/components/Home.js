// import LoginForm from "./LoginForm"
// import SignUpForm from "./SignUpForm"
import { Link } from "react-router-dom"

const Home = (props) => {
    return (
        <div>
            <h1>Welcome to Cannabis Collection</h1>
            <h2>A place to store your highest experiences</h2>
            <button className="loginSignupBackButton">
                <Link
                    to="/login"
                    style={{color: "#D3EBCD", textDecoration: 'none'}}
                >
                Login
                </Link>
            </button>
            <button className="loginSignupBackButton">
                <Link
                    to="/signup"
                    style={{color: "#D3EBCD", textDecoration: 'none'}}
                >
                Sign Up
                </Link>
            </button>
            {/* <LoginForm history={props.history} /> */}
            {/* <SignUpForm history = {props.history} /> */}
            {/* instead of LoginForm have Login and Signup components */}
        </div>
    )
}

export default Home