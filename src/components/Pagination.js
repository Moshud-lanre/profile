import React from "react";

const Pagination = ({profilesPerPage, totalProfile, paginate})=>{
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(totalProfile/profilesPerPage); i++){
        pageNumber.push(i);
    }

    var Page=[];
     Page = pageNumber.map(number=>{
        return <nav>
            <ul className="pagination">
                
                <li key={number} className="page-item">
                    <a onClick={()=> paginate(number)} href="!#" className="page-link">{number}</a>
                </li>
                
            </ul>
        </nav>
    });
    

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
             {Page}
        </div>
        
    );
}

export default Pagination;