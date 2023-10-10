//Esta funcion se encarga de organizar por orden alfabetico los drivers. 
//El parametro recibe todos los drivers

//Para hacer esto primero debemos crear un arreglo de drivers de API + BD donde tenga el id y el name.
//Aplicar la funcion sort.
//Cuando ya esten ordenados corremos una ultima función para comparar el id del arreglo ordenado
//con el id de los objetos originales y organizar estos últimos



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