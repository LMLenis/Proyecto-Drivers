import { GET_ALL_DRIVERS, GET_DRIVER_DETAIL, GET_DRIVER_NAME, CREATE_DRIVER, FILTER, ORDER } from "../actions/actions-types";


const initialState = {
    allDrivers: [],
    driverDetail: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload
            }
        
        case GET_DRIVER_DETAIL:
            return {
                ...state,
                driverDetail: action.payload
            }
        case GET_DRIVER_NAME:
            return {
                ...state,
                driverDetail: action.payload
            }


        case CREATE_DRIVER:
            return {
                ...state,
                allDrivers: [...state.allDrivers,action.payload]
            }

        case FILTER:
            if(action.payload === 'team'){
            let allDriversFiltered = state.allDrivers.filter((driver) => driver.teams === action.payload)
            }
            if(action.payload === 'baseDatos'){
            let allDriversFiltered = state.allDrivers.filter((driver) =>Number(driver.id)===false)
            return {...state, allDrivers: allDriversFiltered}
            }
            if(action.payload === 'api'){
            let allDriversFiltered = state.allDrivers.filter((driver) =>Number(driver.id) === true)
            return {...state,allDrivers: allDriversFiltered}
            }
            if(action.payload === 'allDrivers'){
                return {...state, allDrivers: [...state.allDrivers]}
            } else {
                let allDriversFiltered = state.allDrivers.filter((driver) => driver.teams === action.payload)
                return {...state, allDrivers: allDriversFiltered}
            }
        
        
        case ORDER:
            const allDriversOrder = [...state.allDrivers]
            return {
                ...state,
                allDrivers:
                    action.payload === 'A' 
                    ? allDriversOrder.sort((a,b) => a.name - b.name)        
                    : allDriversOrder.sort((a,b) => a.birthDay - b.birthDay)

            }

        default:
            return {...state
            }
        }
};

export default reducer;