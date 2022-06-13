import React, {Component} from "react";
import { connect } from "react-redux";
import { signup } from "../actions/currentUser";

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
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Full Name"
                        name="name"
                        value = {this.state.name}
                        onChange={this.handleOnChange}
                    />
                    <input 
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {signup})(SignUpForm)