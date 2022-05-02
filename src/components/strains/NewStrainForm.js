import React, {Component} from "react";
import { connect } from "react-redux";
import { createStrain } from "../../actions/strains";

class StrainForm extends Component {
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

    handleEffectSelect = e => {
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
        const types = this.props.types.map(type => <option key={type.attributes.id} value={type.attributes.id}>{type.attributes.name}</option>)
       
        const effects = this.props.effects.map(effect => (
            <div className="effects" key={effect.attributes.id}>
                <input 
                    id={effect.attributes.id}
                    type='checkbox' 
                    value={effect.attributes.id}
                    onChange={this.handleEffectSelect}
                />{effect.attributes.name}
            </div>
        ))

        return (
            <div>
                <h2>Add a New Experience</h2>
                <form className="form" onSubmit={this.handleOnSubmit}>
                    <p>
                        <strong>Select Strain Type: </strong>
                        <select name="type_id" value={this.state.type_id} onChange={this.handleOnChange}>
                            {types}
                        </select><br/>
                    </p>
                    <input 
                        className="formInput"
                        type="text"
                        name="name" 
                        placeholder="Strain Name"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    /><br/><br/>
                    <textarea
                        type="text"
                        name="description" 
                        placeholder="description"
                        value={this.state.description} 
                        onChange={this.handleOnChange}
                        cols="20"
                        rows="3"
                    ></textarea><br/><br/>
                    <input 
                        className="formInput"
                        type="text"
                        name="terpene" 
                        placeholder="aroma/flavor" 
                        value={this.state.terpene}
                        onChange={this.handleOnChange} 
                    /><br/><br/>
                    <input 
                        className="formInput"
                        type="number"
                        name="thc_amount" 
                        placeholder="THC Amount (mg)" 
                        value={this.state.thc_amount}
                        onChange={this.handleOnChange}
                    />
                    <input 
                        className="formInput"
                        type="number"
                        name="cbd_amount" 
                        placeholder="CBD Amount (mg)" 
                        value={this.state.cbd_amount}
                        onChange={this.handleOnChange}
                    />
                    <input 
                        className="formInput"
                        type="number"
                        name="cbg_amount" 
                        placeholder="CBG Amount (mg)" 
                        value={this.state.cbg_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <p><strong>Select Effects Experienced:</strong></p>
                    <div>{effects}</div>
                    <br/>
                    <input className="button" type="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    types: state.types,
    effects: state.effects
})

export default connect(mapStateToProps, {createStrain})(StrainForm)