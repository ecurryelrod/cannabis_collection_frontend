import React, {Component} from "react";
import { connect } from "react-redux";
import { createStrain } from "../../actions/strains";

class NewStrainForm extends Component {
    state = {
        name: "",
        description: "",
        terpene: "",
        thc_amount: "",
        cbd_amount: "",
        cbg_amount: "",
        type_id: "1",
        effect_ids: [],
        userId: this.props.currentUser.id.toString()
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
            effect_ids: [],
            userId: this.props.currentUser.id.toString()
        })
    }

    render() {
        const types = this.props.types.map(type => (
            <option 
                key={type.attributes.id} 
                value={type.attributes.id}
            >
                {type.attributes.name}
            </option>
        ))
       
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
                <form className="form" style={{textAlign: 'left'}} onSubmit={this.handleOnSubmit}>
                    <p>
                        <strong>Select Strain Type: </strong>
                        <select 
                            name="type_id" 
                            className="formSelect"
                            value={this.state.type_id} 
                            onChange={this.handleOnChange}
                        >
                        {types}
                        </select>
                    </p>
                    <br/>
                    <label>Strain Name: </label>
                    <input 
                        className="formInput"
                        type="text"
                        name="name" 
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    /><br/><br/>
                    <label>Description: </label><br/>
                    <textarea
                        type="text"
                        name="description" 
                        value={this.state.description} 
                        onChange={this.handleOnChange}
                        cols="20"
                        rows="3"
                    ></textarea><br/><br/>
                    <label>Aroma/Flavor: </label>
                    <input 
                        className="formInput"
                        type="text"
                        name="terpene" 
                        value={this.state.terpene}
                        onChange={this.handleOnChange} 
                    /><br/><br/>
                    <label>THC Amount: </label>
                    <input 
                        className="formInput"
                        type="number"
                        name="thc_amount" 
                        value={this.state.thc_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <label>CBD Amount: </label>
                    <input 
                        className="formInput"
                        type="number"
                        name="cbd_amount" 
                        value={this.state.cbd_amount}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <label>CBG Amount: </label>
                    <input 
                        className="formInput"
                        type="number"
                        name="cbg_amount" 
                        value={this.state.cbg_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <p><strong>Select Effects Experienced:</strong></p>
                    <div>{effects}</div>
                    <br/>
                    <input className="button" type="submit" />
                </form>
                <br/><br/><br/><br/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        types: state.types,
        effects: state.effects,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {createStrain})(NewStrainForm)