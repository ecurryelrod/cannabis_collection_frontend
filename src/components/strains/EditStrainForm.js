import React, {Component} from "react";
import { connect } from "react-redux";
import { editStrain } from "../../actions/strains";
import { Link } from "react-router-dom";

class EditStrainForm extends Component {
    state = {
        id: this.props.strain.id,
        name: this.props.strain.name,
        description: this.props.strain.description,
        terpene: this.props.strain.terpene,
        thc_amount: this.props.strain.thc_amount,
        cbd_amount: this.props.strain.cbd_amount,
        cbg_amount: this.props.strain.cbg_amount,
        type_id: this.props.strain.type.id,
        effect_ids: this.props.strainEffects
    }

    handleOnChange = e => this.setState({[e.target.name]: e.target.value})

    handleCheckedEffects = e => {
        if (this.state.effect_ids.includes(e.target.value)) {
            this.setState((prevState) => {
                return {
                    // unchecking the checkbox removes the effect id from effect_ids state array
                    effect_ids: prevState.effect_ids.filter(effect => effect !== e.target.value)
                }
            })
        } else {
            // checking checkbox adds the effect id to the effect_ids state array
            this.setState({effect_ids: [...this.state.effect_ids, e.target.value]})
        }
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.editStrain(this.state, this.props.history)
    }

    render() {
        const types = this.props.types.map(type => {
            return <option 
                    key={type.attributes.id} 
                    value={type.attributes.id}
                >
                    {type.attributes.name}
                </option>
        })
       
        const effects = this.props.effects.map(effect => {
            return (
                <div className="effects" key={effect.attributes.id}>
                    <input 
                        id={effect.attributes.id}
                        type='checkbox' 
                        value={effect.attributes.id}
                        checked={this.state.effect_ids.includes(effect.id)}
                        onChange={this.handleCheckedEffects}
                    />
                    <label>{effect.attributes.name}</label>
                </div>
            )
        })
        
        return (
            <div>
                <h2>Edit the Experience</h2>

                <form className="form" onSubmit={this.handleOnSubmit}>
                    <p>
                        <strong>Edit Strain Type: </strong>
                        <select 
                            name="type_id"
                            defaultValue={this.state.type_id}
                            onChange={this.handleOnChange}
                        >
                            {types}
                        </select><br/>
                    </p>
                    <input 
                        className="formInput"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    /><br/><br/>
                    <textarea
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleOnChange}
                        cols="20"
                        rows="3"
                    ></textarea><br/><br/>
                    <input 
                        className="formInput"
                        type="text"
                        name="terpene"
                        value={this.state.terpene}
                        onChange={this.handleOnChange}
                    /><br/><br/>
                    THC Amount (mg)
                    <input 
                        className="formInput"
                        type="text"
                        name="thc_amount"
                        value={this.state.thc_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    CBD Amount (mg)
                    <input 
                        className="formInput"
                        type="text"
                        name="cbd_amount"
                        value={this.state.cbd_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    CBG Amount (mg)
                    <input 
                        className="formInput"
                        type="text"
                        name="cbg_amount"
                        value={this.state.cbg_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <p><strong>Edit Effects Experienced:</strong></p>
                    <div>{effects}</div><br/>
                    <button className="button"><Link to={`/strains`} style={{color: "white"}}>Cancel</Link></button>
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

export default connect(mapStateToProps, {editStrain})(EditStrainForm)