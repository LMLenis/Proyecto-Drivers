
const sortAlphabetic = (paramDrivers) => {
    let arrayDriver= [];
    let arraySort=[];
    
    for(let i=0; i<paramDrivers.length;i++) {
        if (typeof paramDrivers[i].id === "number"){
            arrayDriver.push({id:paramDrivers[i].id, name:paramDrivers[i].name.forename});
            
        }else{
            arrayDriver.push({id:paramDrivers[i].id, name:paramDrivers[i].name});
        }
        
    }

    arrayDriver.sort((a,b) => a.name.localeCompare(b.name) );

    //console.log(arrayDriver)

    for (let i=0; i<arrayDriver.length; i++){
        for(let j=0; j<paramDrivers.length;j++){
            if(arrayDriver[i].id === paramDrivers[j].id){
                arraySort.push(paramDrivers[j]);
                break;
            }
        }
        
    }

    return arraySort;

}


export default sortAlphabetic;