import { GET_ALL_DRIVERS, GET_DRIVER_DETAIL, GET_DRIVER_NAME,
         GET_ALL_TEAMS, CREATE_DRIVER, FILTER, ORDER, CLEAR_DETAIL } from "../actions/actions-types";
import axios from "axios";



// getAllDrivers
//Esta función debe realizar una petición al Back-End. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/drivers'.

export const getAllDrivers = () => {
    const endpoint = '/drivers';
    return async (dispatch) => {
        try{
            const {data} = await axios.get(endpoint);
            return dispatch({
                type: GET_ALL_DRIVERS, 
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};


// getDriverDetail:
// Esta función debe hacer una petición al Back-End. Ten en cuenta que tiene que recibir la variable "id" por
// parámetro. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/drivers/:id'.

export const getDriverDetail = (id) => {
    const endpoint = '/drivers/' + id;
    
    return async (dispatch) => {
        try {
            const {data} = await axios.get(endpoint);
        return dispatch({
            type: GET_DRIVER_DETAIL, 
            payload: data,
        });
        } catch (error) {
            console.log(error);
        }
    };

};


// getDriverName:
// Esta función debe hacer una petición al Back-End. Recibe la variable "name" por
// parámetro. Luego despacha una action con la data recibida.
// End-Point: 'http://localhost:3001/drivesr/name'.

export const getDriverName = (name) => {
    //console.log(name)
    const endpoint = `/drivers/name?name=${name}`;
    
    return async (dispatch) => {
        try{
            const {data} = await axios.get(endpoint);

            return dispatch({
                type: GET_DRIVER_NAME, 
                payload: data
            });
        }catch (error) {
            throw error.response.data
        }
    };
};

// getAllTeams
//Esta función debe realizar una petición al Back-End para traer de la base de datos todos los Teams.
// End-Point: 'http://localhost:3001/teams'.
export const getAllTeams = () => {
    const endpoint = '/teams';
    return async (dispatch) => {
        try {    
            const {data} = await axios.get(endpoint);
            return dispatch({
                type: GET_ALL_TEAMS,
                payload: data
       });
       
        } catch (error){
            console.log(error);
        }
    };
 };


// createDriver:
// Esta función debe recibir una variable "newDriver" por parámetro.
// Luego retornar una action que, en su propiedad payload:
//    - haga un spread operator de la variable newDriver, para copiar todo su contenido.
//    - tenga una nueva propiedad "id" igual a la variable de abajo, pero con un incremento +1.
// Descomenta esta variable cuando la necesites.


export const createDriver = (newDriver) => {
    const endpoint = '/drivers'
    
    //console.log(newDriver);
    return async (dispatch) => {
        try{
            const {data} = await axios.post(endpoint, newDriver);

            return dispatch({
                type: CREATE_DRIVER,
                payload: data,           
            });
        } catch (error) {
            throw (error.response.data);
        }
    };  
}

//filterDrivers:
//Esta función se encarga de filtrar por equipos, drivers de base de datos y drivers de Api .
export const filterDrivers = (parameter) => {
    return {
        type: FILTER,
        payload: parameter
    }
};

//orderDrivers:
//Esta función se encarga de ordenar por alfabetico y fecha de nacimiento
export const orderDrivers = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
};

export const clearDetail = () =>{
    return {
        type: CLEAR_DETAIL,
        payload: {}
    }
}

