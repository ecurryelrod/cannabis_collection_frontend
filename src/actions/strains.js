// synchronous actions
export const setStrains = strains => {
    return {
        type: 'SET_STRAINS',
        strains
    }
}

export const addStrain = strain => {
    return {
        type: 'ADD_STRAIN',
        strain
    }
}

export const updatedStrain = strain => {
    return {
        type: 'UPDATE_STRAIN',
        strain
    }
}

export const strainDeleted = strainId => {
    // debugger
    return {
        type: 'DELETE_STRAIN',
        strainId
    }
}

// asynchronous actions
export const fetchStrains = () => {
    // debugger
    return dispatch => {
        fetch('http://127.0.0.1:3000/api/v1/strains')
        .then(resp => resp.json())
        .then(strains => {
            if (strains.error) {
                alert(strains.error)
            } else {
                dispatch(setStrains(strains.data))
            }
        })
    }
}

export const createStrain = (formData, history) => {
    return dispatch => {
        const sendableData = {
            name: formData.name,
            description: formData.description,
            terpene: formData.terpene,
            thc_amount: formData.thc_amount,
            cbd_amount: formData.cbd_amount,
            cbg_amount: formData.cbg_amount,
            type_id: formData.type_id,
            effect_ids: formData.effect_ids
        }

        fetch('http://127.0.0.1:3000/api/v1/strains', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(sendableData)
        })
        .then(resp => resp.json())
        .then(strains => {
            dispatch(addStrain(strains.data))
            history.push('/strains')
        })
    }
}

export const editStrain = (strainData, history) => {
    const strainDataForUpdate = {
        name: strainData.name,
        description: strainData.description,
        terpene: strainData.terpene,
        thc_amount: strainData.thc_amount,
        cbd_amount: strainData.cbd_amount,
        cbg_amount: strainData.cbg_amount,
        type_id: strainData.type_id,
        effect_ids: strainData.effect_ids
    }
    return dispatch => {
        fetch(`http://127.0.0.1:3000/api/v1/strains/${strainData.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(strainDataForUpdate)
        })
        .then(resp => resp.json())
        .then(strain => {
            dispatch(updatedStrain(strain.data))
            history.push('/strains')
        })
    }
}

export const deleteStrain = strainId => {
    // debugger
    return dispatch =>  {
        fetch(`http://127.0.0.1:3000/api/v1/strains/${strainId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => dispatch(strainDeleted(strainId)))
        // .then(json => {debugger})
    }
}