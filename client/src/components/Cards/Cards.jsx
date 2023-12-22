



import CardList from "../CardList/CardList";
import style from "./Cards.module.css";

const Cards = ({drivers}) =>{

    let escuderias = [];
    return (
    <div>
        
    
     <div className={style.container}>
         
        { drivers?.map((drive) => {
            //drivers de la API
         if (Number(drive.id)){
             return <CardList
                   key = {drive?.id}
                   id = {drive?.id}
                   name={drive?.name.forename}
                   lastname = {drive?.name.surname}
                   image={drive?.image.url}
                   teams={drive?.teams}
                   birthDay={drive?.dob}            
               />
         } else {
            // saca los teams que viene con los drivers de la base de datos y las convierte de un
            //arreglo de objetos a un string de teams separados por comas
            let newDriverTeam = [];
            for (let i=0; i<drive.Teams?.length; i++) {
                newDriverTeam.push(drive.Teams[i].name)
             }
             escuderias = newDriverTeam.toString();
             //drivers de la Base de Datos
            return <CardList
                   key = {drive?.id}
                   id = {drive?.id}
                   name={drive?.name}
                   lastname = {drive?.lastname}
                   image={drive?.image}
                   teams={escuderias}
                   birthDay={drive?.birthDay}            
               />
         }
        })}
               
    </div>
    </div>
    )

  
}

export default Cards;



