import CardList from "../CardList/Cardlist";
import React from "react";
import "./Cards.module.css";

const Cards = ({drivers}) =>{
   
    return (
     <div>
      <h2>Drivers</h2>
        { drivers.map((drive) => {
         if (Number(drive.id)){
             return <CardList
                   key = {drive?.id}
                   id = {drive?.id}
                   name={drive?.name.forename}
                   lastname = {drive?.name.surname}
                   image={drive?.image}
                   teams={drive?.teams}            
               />
         } else {
            return <CardList
                   key = {drive?.id}
                   id = {drive?.id}
                   name={drive?.name}
                   lastname = {drive.lastname}
                   image={drive?.image}
                   teams={drive?.Teams.name}            
               />
         }
        })}
    </div>
    )  

}

export default Cards;


