
const filterTeams = (paramDriver, paramTeam) => {
    let filteredByBase = [];
    let filteredByApi = [];

    console.log(paramDriver);

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

