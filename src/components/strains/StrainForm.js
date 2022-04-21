import React, {Component} from "react";
import { connect } from "react-redux";
import { createStrain } from "../../actions/strains";
// import { addStrain } from "../../actions/strains";

class StrainForm extends Component {
    state = {
        name: "",
        description: "",
        terpene: "",
        thc_amount: "",
        cbd_amount: "",
        cbg_amount: "",
        type_id: "",
        effects: []
    }

    handleOnChange = e => this.setState({[e.target.name]: e.target.value})

    handleTypeSelect = e => this.setState({type_id: e.target.value})

    handleEffectSelect = e => {
        // debugger
        if (this.state.effects.includes(e.target.value)) {
            this.setState((prevState) => {
                return {
                    effects: prevState.effects.filter(effect => effect !== e.target.value)
                }
            })
        } else {
            this.setState({effects: [...this.state.effects, e.target.value]})
        }
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.createStrain(this.state)
        this.setState({
            name: "",
            description: "",
            terpene: "",
            thc_amount: "",
            cbd_amount: "",
            cbg_amount: "",
            type_id: "",
            effects: []
        })
    }

    render() {
        // debugger
        const types = this.props.types.map(type => <option key={type.attributes.id} value={type.attributes.id}>{type.attributes.name}</option>)
        const effects = this.props.effects.map(effect => (
            <div key={effect.attributes.id}>
                <input 
                    id={effect.attributes.id}
                    type='checkbox' 
                    value={effect.attributes.id}
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
                        <select  onChange={this.handleTypeSelect}>
                            {types}
                        </select><br/>
                    </p>
                    <input 
                        name="name" 
                        placeholder="Strain Name"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        name="description" 
                        placeholder="description"
                        value={this.state.description} 
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        name="terpene" 
                        placeholder="aroma/flavor" 
                        value={this.state.terpene}
                        onChange={this.handleOnChange} 
                    /><br/>
                    <input 
                        name="thc_amount" 
                        placeholder="THC Amount" 
                        value={this.state.thc}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        name="cbd_amount" 
                        placeholder="CBD Amount" 
                        value={this.state.cbd}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        name="cbg_amount" 
                        placeholder="CBG Amount" 
                        value={this.state.cbg}
                        onChange={this.handleOnChange}
                    /><br/>
                    <p><strong>Select Effects Experienced:</strong></p>
                    {effects}
                    <br/>
                    <input type="submit" />
                </form>
                {/* {this.state.name} */}
                {console.log(this.state)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    types: state.types,
    effects: state.effects
})

export default connect(mapStateToProps, {createStrain})(StrainForm)