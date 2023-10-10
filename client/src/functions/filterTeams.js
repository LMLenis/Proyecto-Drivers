//Esta funcion se encarga de filtrar por los equipos. El primer parametro recibe todos los drivers
//y el segundo recibe el equipo seleccionado.

//En la Api los equipos vienen en formato string
//En la Base de datos vienen en formato Arreglo de objetos con propiedad name.


const filterTeams = (paramDriver, paramTeam) => {
    let filteredByBase = [];
    let filteredByApi = [];


    for (let i=0; i<paramDriver.length; i++){
        if(typeof paramDriver[i].id === "number"){
            
            paramDriver[i].teams?.includes(paramTeam) && filteredByApi.push(paramDriver[i])
        }else {
            for (const teamBd of paramDriver[i].Teams){              
                if(teamBd.name===paramTeam) filteredByBase.push(paramDriver[i])
                
            }
                
        }
    }
    return [...filteredByApi ,...filteredByBase]
}

export default  filterTeams;

