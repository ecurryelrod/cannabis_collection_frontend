import React, {Component} from "react";
import { connect } from "react-redux";

class EditStrainForm extends Component {
    handleOnChange = e => {}

    handleOnSubmit = e => {
        e.preventDefault()
    }

    render() {
        const { strain, strainType, strainEffects } = this.props

        const types = this.props.types.map(type => {
            // debugger
            // if (type.id === strainType) {
            return <option 
                    key={type.attributes.id} 
                    value={type.attributes.id}
                >
                    {type.attributes.name}
                </option>
            // }
            // return <option key={type.attributes.id} value={type.attributes.id}>{type.attributes.name}</option>
        })
       
        const effects = this.props.effects.map(effect => (
            <div key={effect.attributes.id}>
                <input 
                    id={effect.attributes.id}
                    className="checkbox"
                    type='checkbox' 
                    value={effect.attributes.id}
                />
                <label>{effect.attributes.name}</label>
            </div>
        ))
        
        return (
            <div>
                <h2>Edit {strain.attributes.name} Strain</h2>

                <form onSubmit={this.handleOnSubmit}>
                    <p>
                        <strong>Edit Strain Type: </strong>
                        <select 
                            defaultValue={strainType}
                            value={strain.attributes.type_id} 
                        >
                            {types}
                        </select><br/>
                    </p>
                    <input 
                        type="text"
                        name="name"
                        value={strain.attributes.name}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="text"
                        name="description"
                        value={strain.attributes.description}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="text"
                        name="terpene"
                        value={strain.attributes.terpene}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="text"
                        name="thc_amount"
                        value={strain.attributes.thc_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="text"
                        name="cbd_amount"
                        value={strain.attributes.cbd_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        type="text"
                        name="cbg_amount"
                        value={strain.attributes.cbg_amount}
                        onChange={this.handleOnChange}
                    /><br/>
                    <p><strong>Edit Effects Experienced:</strong></p>
                    <div className="formEffects">{effects}</div>
                    <input type="submit" />
                </form>
                {/* {this.state.name} */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    strains: state.strains,
    types: state.types,
    effects: state.effects
})

export default connect(mapStateToProps)(EditStrainForm)