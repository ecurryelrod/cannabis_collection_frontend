import React, {Component} from "react";
import { connect } from "react-redux";
import Strain from "./Strain";
// import { fetchStrains } from "../../actions/strains";
import { editStrain } from "../../actions/strains";
import { deleteStrain } from "../../actions/strains";

class Strains extends Component {
    // componentDidMount() {
    //     this.props.fetchStrains()
    // }
    render() {
        return (
            <div>
                <h2>Strains</h2>
                {this.props.strains.map(strain => 
                    <Strain key={strain.id} strain={strain.attributes} edit={this.props.editStrain} delete={this.props.deleteStrain} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    strains: state.strains
})

export default connect(mapStateToProps, {editStrain, deleteStrain})(Strains)