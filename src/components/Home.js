import LoginForm from "./LoginForm"

const Home = (props) => {
    return (
        <div>
            <h1>Welcome to Cannabis Collection</h1>
            <h3>A place to store your highest experiences</h3>
            <LoginForm history={props.history} />
            {/* instead of LoginForm have Login and Signup components */}
        </div>
    )
}

export default Home