import React, {Component} from "react";

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
        debugger
        // call reducer
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
                        type="text"
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

export default SignUpForm