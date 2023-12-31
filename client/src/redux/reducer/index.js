import { GET_ALL_DRIVERS, GET_DRIVER_DETAIL, GET_DRIVER_NAME,
     CREATE_DRIVER, FILTER, ORDER, GET_ALL_TEAMS, CLEAR_DETAIL} from "../actions/actions-types";
import filterTeams from '../../functions/filterTeams';
import sortAlphabetic from '../../functions/sortAlphabetic';
import sortByBirthDay from '../../functions/sortByBirthDay';

const initialState = {
    allDrivers: [],
    driverDetail: {},
    driverShow: [],
    allTeams: [],

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
            let allDriversFiltered = state.driverShow.filter((driver) =>typeof driver.id != "number")
            return {...state, driverShow: allDriversFiltered}
            }
            if(action.payload === 'api'){
            let allDriversFiltered = state.driverShow.filter((driver) =>typeof driver.id === "number")
            return {...state,driverShow: allDriversFiltered}
            }
            if(action.payload === 'allDrivers'){
                return {...state, driverShow: [...state.allDrivers]}
            } else {
                    let allDriversFiltered = filterTeams(state.driverShow, action.payload)
                    return {...state, driverShow: allDriversFiltered}
                }
                         
        
        case ORDER:
            let allDriversOrder = [...state.allDrivers]
            if(action.payload ==='alphaA'){
                console.log('A')
                allDriversOrder = sortAlphabetic(state.driverShow,'A');
            }
            if(action.payload ==='alphaB'){
                console.log('B')
                allDriversOrder = sortAlphabetic(state.driverShow,'B');
            }
            if (action.payload ==='birthDayA'){
                console.log('BA')
                allDriversOrder = sortByBirthDay(state.driverShow,'A');
            } 
            if (action.payload ==='birthDayB'){
                console.log('BB')
                allDriversOrder = sortByBirthDay(state.driverShow,'B');
            }
            return {...state, driverShow:allDriversOrder}

        case CLEAR_DETAIL:
            return {
                ...state,
                driverDetail: action.payload
            }
                    
        default:
            return {...state
            }
        }
};

export default reducer;