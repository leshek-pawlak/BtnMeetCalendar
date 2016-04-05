import { combineReducers } from 'redux'

const initialState = {
  leads: [{id: 1, title: 'lead reducer', body: 'description reducer'}]
}

function leads(state = initialState, action) {
    switch (action.type) {
        case 'ADD_LEAD':
            return {
                ...state,
                leads: [
                    ...state.leads,
                    {id: 2, title: 'lead reducer 2', body: 'description reducer 2'},
                ]
            }

        default:
          return state
    }
}

const app = combineReducers({
  leads
})

export default app
