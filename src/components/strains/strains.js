import React, {Component} from "react";
import { connect } from "react-redux";
import Strain from "./Strain";
import { deleteStrain } from "../../actions/strains";

class Strains extends Component {
    render() {
        return (
            <div>
                <h2>Strains</h2>
                {this.props.strains.map(strain => 
                    <Strain key={strain.id} strain={strain.attributes} delete={this.props.deleteStrain} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    strains: state.strains
})

export default connect(mapStateToProps, {deleteStrain})(Strains)