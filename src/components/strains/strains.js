import React, {Component} from "react";
import { connect } from "react-redux";

class Strains extends Component {
    render() {
        // debugger
        const strains = this.props.strains.map(strain => (
            <div key={strain.id}>
                <p><strong>Strain Name: </strong>{strain.attributes.name}</p>
                <p><strong>Type: </strong>{strain.attributes.type.name}</p>
                <p><strong>Description: </strong>{strain.attributes.description}</p>
                <p><strong>Flavor/Aroma: </strong>{strain.attributes.terpene}</p>
                <p><strong>THC: </strong>{strain.attributes.thc_amount} g</p>
                <p><strong>CBD: </strong>{strain.attributes.cbd_amount} g</p>
                <p><strong>CBG: </strong>{strain.attributes.cbg_amount} g</p>
                <p><strong>Effects:</strong></p>
                <ul>
                    {strain.attributes.effects.map(effect => <div key={effect.id}>{effect.name}</div>)}
                </ul>
            </div>
        ))
        return (
            <div>
                {strains}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    strains: state.strains
})

export default connect(mapStateToProps)(Strains)