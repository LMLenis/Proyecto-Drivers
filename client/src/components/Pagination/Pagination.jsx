import { useState } from "react";
import "./Pagination.module.css";

const Pagination = () =>{

    const [drivers, setDrivers] = useState(drivers);
    const [currentPage, setcurentPage] = useState(1);

    const elementsPerPage = 9;
    const startIndex = (currentPage-1)*elementsPerPage;
    const endIndex = startIndex + elementsPerPage;
    const currentElements = drivers.slice(startIndex, endIndex);

    const totalpages =Math.ceil(drivers.length/elementsPerPage);

    const pageHandler = (pageNumber) =>{

    }
    return (
    <div>
        <h1>paginado</h1>
        <button type = "submit" onClick= {pageHandler}>'Next'</button>
        <button type = "submit" onClick= {pageHandler}>'Back'</button>
        <Cards drivers = {currentElements}/> 
    </div>
    )
}

export default Pagination;