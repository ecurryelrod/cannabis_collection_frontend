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

export const strainDeleted = strainId => {
    return {
        type: 'DELETE_STRAIN',
        strainId
    }
}

// asynchronous actions
export const fetchStrains = () => {
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

export const createStrain = (formData) => {
    return dispatch => {
        const sendableData = {
            name: formData.name,
            description: formData.description,
            terpene: formData.terpene,
            thc_amount: formData.thc_amount,
            cbd_amount: formData.cbd_amount,
            cbg_amount: formData.cbg_amount,
            type_id: formData.type_id,
            effect_ids: formData.effects
        }

        fetch('http://127.0.0.1:3000/api/v1/strains', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(sendableData)
        })
        .then(resp => resp.json())
        .then(strains => dispatch(addStrain(strains.data)))
    }
}

export const deleteStrain = strainId => {
    debugger
    return dispatch =>  {

    }
}