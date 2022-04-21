import React from "react";

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
            <ul>
                {props.strain.effects.map(effect => <div key={effect.id}>{effect.name}</div>)}
            </ul>
            <button onClick={() => props.delete(props.strain.id)}>Delete</button>
        </div>
    )
}

export default Strain