import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchTypes } from "../../actions/types";
import { fetchEffects } from "../../actions/effects";
import { createStrain } from "../../actions/strains";

class StrainForm extends Component {
    componentDidMount() {
        this.props.fetchEffects()
        this.props.fetchTypes()
    }

    state = {
        name: "",
        description: "",
        terpene: "",
        thc_amount: "",
        cbd_amount: "",
        cbg_amount: "",
        type_id: "1",
        effect_ids: []
    }

    handleOnChange = e => this.setState({[e.target.name]: e.target.value})

    handleTypeSelect = e => this.setState({type_id: e.target.value})

    handleEffectSelect = e => {
        // debugger
        if (this.state.effect_ids.includes(e.target.value)) {
            this.setState((prevState) => {
                return {
                    effect_ids: prevState.effect_ids.filter(effect => effect !== e.target.value)
                }
            })
        } else {
            this.setState({effect_ids: [...this.state.effect_ids, e.target.value]})
        }
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.createStrain(this.state, this.props.history)
        this.setState({
            name: "",
            description: "",
            terpene: "",
            thc_amount: "",
            cbd_amount: "",
            cbg_amount: "",
            type_id: "",
            effect_ids: []
        })
    }

    render() {
        // debugger
        const types = this.props.types.map(type => <option key={type.attributes.id} value={type.attributes.id}>{type.attributes.name}</option>)
       
        const effects = this.props.effects.map(effect => (
            <div key={effect.attributes.id}>
                <input 
                    id={effect.attributes.id}
                    className="checkbox"
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
                        <select value={this.state.type_id} onChange={this.handleTypeSelect}>
                            {types}
                        </select><br/>
                    </p>
                    <input 
                        type="text"
                        name="name" 
                        placeholder="Strain Name"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="text"
                        name="description" 
                        placeholder="description"
                        value={this.state.description} 
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="text"
                        name="terpene" 
                        placeholder="aroma/flavor" 
                        value={this.state.terpene}
                        onChange={this.handleOnChange} 
                    /><br/>
                    <input 
                        type="number"
                        name="thc_amount" 
                        placeholder="THC Amount" 
                        value={this.state.thc_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="number"
                        name="cbd_amount" 
                        placeholder="CBD Amount" 
                        value={this.state.cbd_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="number"
                        name="cbg_amount" 
                        placeholder="CBG Amount" 
                        value={this.state.cbg_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <p><strong>Select Effects Experienced:</strong></p>
                    <div className="formEffects">{effects}</div>
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

export default connect(mapStateToProps, {fetchEffects, fetchTypes, createStrain})(StrainForm)