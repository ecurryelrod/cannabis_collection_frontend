import React from "react";
import { Link } from "react-router-dom";

const Strain = props => {
    return (
        <div>
            <p><strong>Strain Name: </strong>{props.strain.name}</p>
            <p><strong>Type: </strong>{props.strain.type.name}</p>
            <p><strong>Description: </strong>{props.strain.description}</p>
            <p><strong>Flavor/Aroma: </strong>{props.strain.terpene}</p>
            <p><strong>THC: </strong>{props.strain.thc_amount} g</p>
            <p><strong>CBD: </strong>{props.strain.cbd_amount} g</p>
            <p><strong>CBG: </strong>{props.strain.cbg_amount} g</p>
            <p><strong>Effects:</strong></p>
            <div className="effects">
                {props.strain.effects.map(effect => <div key={effect.id}>{effect.name}</div>)}
            </div>
            <button onClick={() => props.delete(props.strain.id)}>Delete</button>
            <button><Link to={`/strains/${props.strain.id}/edit`}>Edit</Link></button>
        </div>
    )
}

export default Strain