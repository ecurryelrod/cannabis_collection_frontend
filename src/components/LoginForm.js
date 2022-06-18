import React, {Component} from "react";
import { connect } from "react-redux";
import { login } from "../actions/currentUser";
import { Link } from "react-router-dom";

class LoginForm extends Component {
    state = {
        email: "",
        password: ""
    }

    handleOnChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.login(this.state, this.props.history)
    }

    render() {
        return (
            <div>
                <h1>Welcome to Cannabis Collection</h1>
                <h2>Please Login Below</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input 
                        className="formInput"
                        type="text" 
                        placeholder="email" 
                        name="email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                    <input 
                        className="formInput"
                        type="password"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <input 
                        className="button"
                        type="submit"
                        value="Login"
                    />
                </form>
                <br/>
                <button className="loginSignupBackButton">
                    <Link
                        to="/"
                        style={{color: "#D3EBCD", textDecoration: 'none'}}
                    >
                    Back to Home
                    </Link>
                </button>
            </div>
        )
    }
}

export default connect(null, {login})(LoginForm)