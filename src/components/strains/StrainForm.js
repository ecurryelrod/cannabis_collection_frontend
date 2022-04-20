import React, {Component} from "react";
import { connect } from "react-redux";

class StrainForm extends Component {
    state = {
        name: "",
        description: "",
        terpene: "",
        thc: "",
        cbd: "",
        cbg: "",
        type: "",
        effects: []
    }

    handleOnChange = e => this.setState({[e.target.name]: e.target.value})

    // need to figure out how to uncheck a box and have it disappear from state
    handleEffectSelect = e => this.setState({effects: [...this.state.effects, e.target.value]})

    handleOnSubmit = e => {
        e.preventDefault()

        this.setState({
            name: "",
            description: "",
            terpene: "",
            thc: "",
            cbd: "",
            cbg: "",
            type: "",
            effects: []
        })
    }

    render() {
        // debugger
        const types = this.props.types.map(type => <option key={type.attributes.id} value={type.attributes.name}>{type.attributes.name}</option>)
        const effects = this.props.effects.map(effect => (
            <div key={effect.attributes.id}>
                <input 
                    id={effect.attributes.name} 
                    name={effect.attributes.name} 
                    type='checkbox' 
                    value={effect.attributes.name} 
                    onChange={this.handleEffectSelect}
                />
                <label>{effect.attributes.name}</label>
            </div>
        ))

        return (
            <div>
                <h2>Add a New Strain</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <p>
                        <strong>Select Strain Type: </strong>
                        <select name="type">
                            {types}
                        </select><br/>
                    </p>
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
                    <input 
                        name="terpene" 
                        placeholder="aroma/flavor" 
                        onChange={this.handleOnChange} 
                    /><br/>
                    <input 
                        name="thc" 
                        placeholder="THC Amount" 
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        name="cbd" 
                        placeholder="CBD Amount" 
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        name="cbg" 
                        placeholder="CBG Amount" 
                        onChange={this.handleOnChange}
                    /><br/>
                    <p><strong>Select Effects Experienced:</strong></p>
                    {effects}
                    <br/>
                    <input type="submit" />
                </form>
                {console.log(this.state)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    types: state.types,
    effects: state.effects
})

export default connect(mapStateToProps)(StrainForm)