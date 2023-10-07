import { GET_ALL_DRIVERS, GET_DRIVER_DETAIL, GET_DRIVER_NAME, CREATE_DRIVER, FILTER, ORDER, GET_ALL_TEAMS } from "../actions/actions-types";


const initialState = {
    allDrivers: [],
    driverDetail: {},
    driverShow: [],
    allTeams: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
                driverShow: action.payload
            }
        
        case GET_DRIVER_DETAIL:
            return {
                ...state,
                driverDetail: action.payload
            }
        case GET_DRIVER_NAME:
            
            return {
                ...state,
                driverShow: action.payload
            }
        
        case GET_ALL_TEAMS:
            return {
                ...state,
                allTeams: action.payload
            }

        case CREATE_DRIVER:
            return {
                ...state,
                allDrivers: [...state.allDrivers,action.payload]
            }

        case FILTER:
          
            if(action.payload === 'baseDatos'){
            let allDriversFiltered = state.allDrivers.filter((driver) =>typeof driver.id != "number")
            return {...state, driverShow: allDriversFiltered}
            }
            if(action.payload === 'api'){
            let allDriversFiltered = state.allDrivers.filter((driver) =>typeof driver.id === "number")
            return {...state,driverShow: allDriversFiltered}
            }
            if(action.payload === 'allDrivers'){
                return {...state, driverShow: [...state.allDrivers]}
            } else {
                    let allDriversFiltered = state.allDrivers.filter((driver) => driver.teams?.includes(action.payload))
                    return {...state, driverShow: allDriversFiltered}
                }
                 
            
        
        
        case ORDER:
            const allDriversOrder = [...state.allDrivers]
            return {
                ...state,
                allDrivers:
                    action.payload === 'alphabetical' 
                    ? allDriversOrder.sort((a,b) => typeof a.id ==="number"? a.name.forename - b.name.forename: a.name-b.name )        
                    : allDriversOrder.sort((a,b) => typeof a.id ==="number"? a.dob - b.dob :a.birthDay - b.birthDay)

            }

        default:
            return {...state
            }
        }
};

export default reducer;