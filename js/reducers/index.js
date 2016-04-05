import { combineReducers } from 'redux'

const initialState = {
  leads: [{id: 1, title: 'lead reducer', body: 'description reducer'}]
}

function leads(state = initialState, action) {
  // For now, don’t handle any actions
  // and just return the state given to us.
  return state
}

const app = combineReducers({
  leads
})

export default app