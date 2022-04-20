import React, {Component} from "react";
import { connect } from "react-redux";

class StrainForm extends Component {
    state = {
        name: "",
        description: "",
        terpene: "",
        thc: "",
        cbd: "",
        cbg: ""
    }

    handleOnChange = e => this.setState({[e.target.name]: e.target.value})

    handleOnSubmit = e => {
        e.preventDefault()

        this.setState({
            name: "",
            description: "",
            terpene: "",
            thc: "",
            cbd: "",
            cbg: ""
        })
    }

    render() {
        // debugger
        const types = this.props.types.map(type => <option key={type.id} value={type.attributes.name}>{type.attributes.name}</option>)

        return (
            <div>
                <h3>Add a New Strain</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <select name="type">
                        {types}
                    </select><br/>
                    <input 
                        name="name" 
                        placeholder="Strain Name"
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        name="description" 
                        placeholder="description" 
                        onChange={this.handleOnChange}
                    /><br/>
                    <input name="terpene" placeholder="aroma/flavor" /><br/>
                    <input name="thc" placeholder="THC Amount" /><br/>
                    <input name="cbd" placeholder="CBD Amount" /><br/>
                    <input name="cbg" placeholder="CBG Amount" /><br/>
                    <input type="checkbox" value={this.state.effects} /><br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    types: state.types
})

export default connect(mapStateToProps)(StrainForm)