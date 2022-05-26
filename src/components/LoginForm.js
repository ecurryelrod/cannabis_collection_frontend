import React, {Component} from "react";
import { connect } from "react-redux";
import { login } from "../actions/currentUser";

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
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="email" 
                        name="email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                    <input 
                        type="password"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <input 
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        )
    }
}

export default connect(null, {login})(LoginForm)