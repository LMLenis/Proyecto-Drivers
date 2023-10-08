
const sortByBirthDay = (paramDrivers) => {
    let arrayDriver= [];
    let arraySort=[];
    


    for(let i=0; i<paramDrivers.length;i++) {
        if (typeof paramDrivers[i].id === "number"){
            arrayDriver.push({id:paramDrivers[i].id, birthDay:paramDrivers[i].dob});
        }else{
            arrayDriver.push({id:paramDrivers[i].id, birthDay:paramDrivers[i].birthDay});
        }
        
    }
    
    arrayDriver.sort((a,b) => new Date(a.birthDay).getTime() - new Date(b.birthDay).getTime());

    
    for (let i=0; i<arrayDriver.length; i++){
        for(let j=0; j<paramDrivers.length;j++){
            if(arrayDriver[i].id === paramDrivers[j].id){
                arraySort.push(paramDrivers[j]);
                break;
            }
        }
        
    }

    //console.log(arraySort)
    
    return arraySort;


}


export default sortByBirthDay;