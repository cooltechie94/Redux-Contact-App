import * as actionTypes from './actionsType';

export const createContact=(contact)=>{
        return {
            type: actionTypes.CREATE_NEW_CONTACT,
            contact:contact
        }
}
export const deleteContact=(id)=>{
    return {
        type: actionTypes.REMOVE_CONTACT,
        id: id
    }
}




