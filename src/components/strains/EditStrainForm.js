import React, {Component} from "react";
import { connect } from "react-redux";
import { editStrain } from "../../actions/strains";

class EditStrainForm extends Component {
    state = {
        id: this.props.strain.attributes.id,
        name: this.props.strain.attributes.name,
        description: this.props.strain.attributes.description,
        terpene: this.props.strain.attributes.terpene,
        thc_amount: this.props.strain.attributes.thc_amount,
        cbd_amount: this.props.strain.attributes.cbd_amount,
        cbg_amount: this.props.strain.attributes.cbg_amount,
        type_id: this.props.strain.attributes.type.id,
        effect_ids: this.props.strainEffects
    }

    handleOnChange = e => this.setState({[e.target.name]: e.target.value})

    handleCheckedEffects = e => {
        // debugger
        if (this.state.effect_ids.includes(e.target.value)) {
            // can i somehow set the default checked attrib here???
            this.setState((prevState) => {
                return {
                    effect_ids: prevState.effect_ids.filter(effect => effect !== e.target.value)
                }
            })
        } else {
            this.setState({effect_ids: [...this.state.effect_ids, e.target.value]})
        }
    }

    defaultChecked = () => {
        // if the effect_id from comp state === the effect.id from redux state, then checked should be true / auto checked
        // else checked attribute should be false / not checked
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.editStrain(this.state, this.props.history)
    }

    render() {
        // debugger

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
            <div key={effect.attributes.id}>
                <input 
                    id={effect.attributes.id}
                    className="checkbox"
                    type='checkbox' 
                    value={effect.attributes.id}
                    onChange={this.handleCheckedEffects}
                />
                <label>{effect.attributes.name}</label>
            </div>

            )
        })
        
        return (
            <div>
                <h2>Edit Strain</h2>

                <form onSubmit={this.handleOnSubmit}>
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
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="text"
                        name="terpene"
                        value={this.state.terpene}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="text"
                        name="thc_amount"
                        value={this.state.thc_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="text"
                        name="cbd_amount"
                        value={this.state.cbd_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="text"
                        name="cbg_amount"
                        value={this.state.cbg_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <p><strong>Edit Effects Experienced:</strong></p>
                    <div className="formEffects">{effects}</div><br/>
                    <input type="submit" />
                </form>
                {console.log(this.state)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    strains: state.strains,
    types: state.types,
    effects: state.effects
})

export default connect(mapStateToProps, {editStrain})(EditStrainForm)