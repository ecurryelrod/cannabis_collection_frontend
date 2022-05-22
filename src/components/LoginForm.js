import React, {Component} from "react";

class LoginForm extends Component {
    state = {
        email: "",
        password: ""
    }

    handleOnChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <form>
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

export default LoginForm