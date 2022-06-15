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
                <h2>Create an Account Below</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input 
                        className="formInput"
                        type="text" 
                        placeholder="Full Name"
                        name="name"
                        value = {this.state.name}
                        onChange={this.handleOnChange}
                    />
                    <input 
                        className="formInput"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                    <input 
                        className="formInput"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <input className="button" type="submit" />
                </form>
                <br/>
                <button className="backButton">
                    <Link
                        to="/"
                        style={{color: "lightgreen", textDecoration: 'none'}}
                    >
                    Back to Home
                    </Link>
                </button>
            </div>
        )
    }
}

export default connect(null, {signup})(SignUpForm)