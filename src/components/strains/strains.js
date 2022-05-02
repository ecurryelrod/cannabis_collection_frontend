import React, {Component} from "react";
import { connect } from "react-redux";
import Strain from "./Strain";
import { filterStrains } from "../../actions/strains";
import { editStrain } from "../../actions/strains";
import { deleteStrain } from "../../actions/strains";

class Strains extends Component {
    // want to filter strains by type
    handleFilterByType = e => {
        this.props.filterStrains(e.target.value)
    }

    render() {
        // debugger
        const types = this.props.types.map(type => (
            <option
                key={type.attributes.id}
                value={type.attributes.name}
            >
                {type.attributes.name}
            </option>
        ))

        return (
            <div>
                <h3>Filter by type</h3>
                <select onChange={this.handleFilterByType}>
                    {types}
                </select>

                <h2>Experiences to Remember</h2>
                <div className="strainContainer">
                    {this.props.strains.map(strain => 
                        <Strain 
                            key={strain.id} 
                            strain={strain.attributes} 
                            edit={this.props.editStrain} 
                            delete={this.props.deleteStrain} 
                        />
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    strains: state.strains.addedStrains,
    types: state.types
})

export default connect(mapStateToProps, {filterStrains, editStrain, deleteStrain})(Strains)