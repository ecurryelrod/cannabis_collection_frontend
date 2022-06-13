// import LoginForm from "./LoginForm"
// import SignUpForm from "./SignUpForm"
import { Link } from "react-router-dom"

const Home = (props) => {
    return (
        <div>
            <h1>Welcome to Cannabis Collection</h1>
            <h3>A place to store your highest experiences</h3>
            <button className="button"><Link
                to="/login"
                style={{color: "white"}}
            >Login</Link></button>
            <button className="button"><Link
                to="/signup"
                style={{color: "white"}}
            >Sign Up</Link></button>
            {/* <LoginForm history={props.history} /> */}
            {/* <SignUpForm history = {props.history} /> */}
            {/* instead of LoginForm have Login and Signup components */}
        </div>
    )
}

export default Home