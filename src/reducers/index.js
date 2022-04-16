import isLogged from './isLogged'
import isAdmin from './isAdmin'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    logged: isLogged,
    admin: isAdmin
})

export default allReducers