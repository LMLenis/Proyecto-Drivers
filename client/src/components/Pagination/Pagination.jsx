import CardList from '../CardList/CardList'
import style from "./Pagination.module.css";

const Pagination = ({drivers}) =>{


    let escuderias = [];
    return (
    <div>
        
    
     <div className={style.container}>
         
        { drivers?.map((drive) => {
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
            let newDriverTeam = [];
            for (let i=0; i<drive.Teams?.length; i++) {
                newDriverTeam.push(drive.Teams[i].name)
             }
             escuderias = newDriverTeam.toString();
             //console.log(escuderias);
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

export default Pagination;



