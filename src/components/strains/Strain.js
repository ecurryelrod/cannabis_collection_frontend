import React from "react";
import { Link } from "react-router-dom";

const Strain = props => {
    return (
        <div className="strainBox">
            <p><strong>Strain Name: </strong>{props.strain.name}</p>
            <p><strong>Type: </strong>{props.strain.type.name}</p>
            <p><strong>Description: </strong>{props.strain.description}</p>
            <p><strong>Flavor/Aroma: </strong>{props.strain.terpene}</p>
            <p><strong>THC: </strong>{props.strain.thc_amount} mg</p>
            <p><strong>CBD: </strong>{props.strain.cbd_amount} mg</p>
            <p><strong>CBG: </strong>{props.strain.cbg_amount} mg</p>
            <p><strong>Effects:</strong></p>
            <div>
                {props.strain.effects.map(effect => <div key={effect.id}>{effect.name}</div>)}
            </div>
            <br/>
            <button className="button"><Link to={`/strains/${props.strain.id}/edit`} style={{color: "white"}}>Edit</Link></button>
            <button className="button" onClick={() => props.delete(props.strain.id)}>Delete</button>
            <br/><br/>
        </div>
    )
}

export default Strain