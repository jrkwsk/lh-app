import {DONE_FILTER} from '../actions/actions'

const reducers = (state, action) => {
    switch (action.type) {
        case DONE_FILTER :
            return [state.filter(status => {
                status == payload.status ? return status : return {
                    
                } 

            })]
        
        case INPROGRESS_FILTER :
            return [state, action.payload]
        }
    }

    return state;
}