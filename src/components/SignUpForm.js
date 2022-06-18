import React, {Component} from "react";
import { connect } from "react-redux";
import { signup } from "../actions/currentUser";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
    state = {
        name: "",
        email: "",
        password: ""
    }

    handleOnChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.signup(this.state, this.props.history)
        this.setState({
            name: "",
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to Cannabis Collection</h1>
                <h2>Create a New Account</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>Full Name: </label>
                    <input 
                        className="formInput"
                        type="text" 
                        placeholder="Full Name"
                        name="name"
                        value = {this.state.name}
                        onChange={this.handleOnChange}
                    />
                    <br/><br/>
                    <label>Email: </label>
                    <input 
                        className="formInput"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                    <br/><br/>
                    <label>Password: </label>
                    <input 
                        className="formInput"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <br/><br/>
                    <input className="button" type="submit" />
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

export default connect(null, {signup})(SignUpForm)