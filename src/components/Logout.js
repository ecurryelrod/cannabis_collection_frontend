import React, {Component} from "react";
import { connect } from "react-redux";
import { logout } from "../actions/currentUser";
// import { Link } from "react-router-dom";

class Logout extends Component {
    handleSubmit = e => {
        e.preventDefault()
        this.props.logout()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <button className="button"><Link to={"/"} style={{color: "white"}}>Logout</Link></button> */}
                    <input type="submit" value="Logout" />
                </form>
            </div>
        )
    }
}

export default connect(null, {logout})(Logout)